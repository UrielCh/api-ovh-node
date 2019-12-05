import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /cloudDB Models
 */
export declare namespace cloudDB {
    interface Dump {
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
    interface Service {
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        quotas: cloudDB.project.Quotas;
        status: cloudDB.project.Status;
        taskId?: string;
    }
    interface Task {
        endDate?: string;
        function: string;
        id: string;
        lastUpdate?: string;
        progress: number;
        startDate: string;
        status: cloudDB.task.Status;
    }
    namespace dump {
        type Status = "created" | "creating" | "deleting";
    }
    namespace enterprise {
        namespace Backup {
            type StatusEnum = "archived" | "archiving" | "created" | "creating" | "deleting";
        }
        namespace Cluster {
            type StatusEnum = "created" | "creating" | "deleting" | "reopening" | "restarting" | "scaling" | "suspended" | "suspending" | "updating";
        }
        namespace Endpoint {
            type StatusEnum = "created" | "creating" | "deleting" | "disabled" | "disabling" | "enabled" | "enabling";
        }
        namespace Host {
            type StatusEnum = "configured" | "created" | "creating" | "deleting" | "rebooted" | "rebooting" | "reinstalling" | "reopening" | "suspended" | "suspending";
        }
        namespace LdpMember {
            type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating";
        }
        namespace Maintenance {
            type StatusEnum = "cancelled" | "done" | "running" | "scheduled";
        }
        namespace MaintenanceWindow {
            type StatusEnum = "created" | "creating" | "deleting";
        }
        namespace Offer {
            namespace Region {
                type StatusEnum = "available" | "unavailable";
            }
            type StatusEnum = "available" | "planned" | "testing" | "unavailable";
            type TypeEnum = "postgresql";
        }
        namespace Region {
            type StatusEnum = "created";
        }
        namespace Restore {
            type StatusEnum = "created" | "creating" | "deleting";
            namespace User {
                type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating";
            }
        }
        namespace SecurityGroup {
            type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating";
        }
        namespace SecurityGroupRule {
            type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating";
        }
        namespace User {
            type StatusEnum = "created" | "creating" | "deleting" | "updated" | "updating";
        }
    }
    interface enterprise_Cluster {
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
    interface enterprise_Cluster_Backup {
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
    interface enterprise_Cluster_Endpoint {
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
    interface enterprise_Cluster_Host {
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        status?: cloudDB.enterprise.Host.StatusEnum;
        taskId?: string;
    }
    interface enterprise_Cluster_LdpMember {
        creationDate: string;
        id: string;
        lastUpdate: string;
        note?: string;
        status: cloudDB.enterprise.LdpMember.StatusEnum;
        taskId?: string;
        username: string;
    }
    interface enterprise_Cluster_Maintenance {
        clusterId: string;
        creationDate: string;
        duration: number;
        id: string;
        lastUpdate: string;
        scheduledAt: string;
        status: cloudDB.enterprise.Maintenance.StatusEnum;
        taskId?: string;
    }
    interface enterprise_Cluster_MaintenanceWindow {
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
    interface enterprise_Cluster_Restore {
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
    interface enterprise_Cluster_Restore_User {
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        restoreId: string;
        status: cloudDB.enterprise.Restore.User.StatusEnum;
        taskId?: string;
    }
    interface enterprise_Cluster_SecurityGroup {
        clusterId: string;
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        rulesCount: number;
        status: cloudDB.enterprise.SecurityGroup.StatusEnum;
        taskId?: string;
    }
    interface enterprise_Cluster_SecurityGroup_Rule {
        creationDate: string;
        id: string;
        lastUpdate: string;
        securityGroupId: string;
        source: string;
        status: cloudDB.enterprise.SecurityGroupRule.StatusEnum;
        taskId?: string;
    }
    interface enterprise_Cluster_User {
        clusterId: string;
        creationDate: string;
        id: string;
        lastUpdate: string;
        name: string;
        status: cloudDB.enterprise.User.StatusEnum;
        taskId?: string;
    }
    interface enterprise_Offer {
        creationDate: string;
        lastUpdate: string;
        maxHostCount?: number;
        minHostCount: number;
        name: string;
        status: cloudDB.enterprise.Offer.StatusEnum;
    }
    interface enterprise_Offer_Region {
        hostLeft?: number;
        offerName: string;
        regionName: string;
        status: cloudDB.enterprise.Offer.Region.StatusEnum;
    }
    interface enterprise_Region {
        creationDate: string;
        lastUpdate: string;
        maintenanceDayOfWeek: number;
        maintenanceDuration: number;
        maintenanceStartTime: string;
        name: string;
        status: cloudDB.enterprise.Region.StatusEnum;
    }
    namespace instance {
        type Type = "standard";
    }
    namespace project {
        interface Quotas {
            standard: cloudDB.project.quotas.Standard;
        }
        type Status = "created" | "creating" | "deleting" | "reopening" | "suspended" | "suspending";
        namespace quotas {
            interface Standard {
                instance: cloudDB.project.quotas.standard.Quota;
            }
            namespace standard {
                interface Quota {
                    current: number;
                    max: number;
                }
            }
        }
    }
    namespace standard {
        interface Oom {
            date: string;
            sizeReached: number;
        }
        interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        namespace configuration {
            interface Detail {
                availableValues: string[];
                defaultValue: string;
                description: string;
                key: string;
                lastUpdate: string;
                type: cloudDB.standard.configuration.detail.Type;
                unit?: string;
                value: string;
            }
            type Status = "applied" | "updating";
            namespace detail {
                type Type = "boolean" | "number" | "string";
            }
        }
        namespace database {
            type Status = "created" | "creating" | "deleting" | "dumping" | "importing" | "restoring";
            interface User {
                grantId: string;
                grantType: cloudDB.standard.grant.Type;
                userName: string;
            }
            namespace extension {
                type Status = "disabled" | "disabling" | "enabled" | "enabling";
            }
        }
        namespace flavor {
            type Status = "available" | "testing" | "unavailable";
        }
        namespace grant {
            type Status = "created" | "creating" | "deleting" | "updating";
            type Type = "admin" | "none" | "ro" | "rw";
        }
        namespace image {
            interface Capabilities {
                database: cloudDB.standard.image.capabilities.Capability;
                dump: cloudDB.standard.image.capabilities.Capability;
                grant: cloudDB.standard.image.capabilities.Capability;
                user: cloudDB.standard.image.capabilities.Capability;
            }
            type Status = "available" | "testing" | "unavailable";
            type Type = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis";
            namespace capabilities {
                interface Capability {
                    create: boolean;
                    delete: boolean;
                    update: boolean;
                }
            }
        }
        namespace instance {
            interface CreationRules {
                databaseName?: cloudDB.standard.instance.creationRules.CreationRule;
                userName?: cloudDB.standard.instance.creationRules.CreationRule;
                userPassword?: cloudDB.standard.instance.creationRules.CreationRule;
            }
            interface Flavor {
                cpu?: number;
                disk?: complexType.UnitAndValue<number>;
                name: string;
                ram?: complexType.UnitAndValue<number>;
            }
            interface Image {
                capabilities: cloudDB.standard.image.Capabilities;
                name: string;
            }
            interface MetricsData {
                endpoint: string;
                readToken: string;
            }
            interface Region {
                name?: string;
                type?: cloudDB.standard.region.Type;
            }
            type Status = "creating" | "deleting" | "reopening" | "restarting" | "running" | "starting" | "stopped" | "stopping" | "suspended" | "suspending" | "updating";
            namespace creationRules {
                interface CreationRule {
                    exclude: string[];
                    max: number;
                    min: number;
                    regex: string;
                }
            }
        }
        namespace region {
            type Status = "available" | "testing" | "unavailable";
            type Type = "hosting" | "internal" | "public";
        }
        namespace user {
            interface Database {
                databaseName: string;
                grantId: string;
                grantType: cloudDB.standard.grant.Type;
            }
            type Status = "created" | "creating" | "deleting" | "updating";
        }
        namespace whitelist {
            type Status = "created" | "creating" | "deleting" | "updating";
        }
    }
    interface standard_Configuration {
        details: cloudDB.standard.configuration.Detail[];
        lastUpdate: string;
        status: cloudDB.standard.configuration.Status;
        taskId?: string;
    }
    interface standard_Database {
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
    interface standard_Flavor {
        cpu?: number;
        disk?: complexType.UnitAndValue<number>;
        name: string;
        ram?: complexType.UnitAndValue<number>;
        status: cloudDB.standard.flavor.Status;
        supportedRegionNames: string[];
    }
    interface standard_Grant {
        creationDate: string;
        databaseName: string;
        id: string;
        lastUpdate: string;
        status: cloudDB.standard.grant.Status;
        taskId?: string;
        type: cloudDB.standard.grant.Type;
        userName: string;
    }
    interface standard_Image {
        name: string;
        status: cloudDB.standard.image.Status;
        supportedFlavorNames: string[];
        type: cloudDB.standard.image.Type;
        version: string;
    }
    interface standard_Instance {
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
    interface standard_Region {
        name: string;
        status: cloudDB.standard.region.Status;
        type: cloudDB.standard.region.Type;
    }
    interface standard_User {
        creationDate: string;
        databases: cloudDB.standard.user.Database[];
        lastUpdate: string;
        name: string;
        status: cloudDB.standard.user.Status;
        taskId?: string;
    }
    interface standard_Whitelist {
        creationDate: string;
        lastUpdate: string;
        name: string;
        network: string;
        status: cloudDB.standard.whitelist.Status;
        taskId?: string;
    }
    interface standard_database_Dump {
        creationDate: string;
        expirationDate?: string;
        id: string;
        name?: string;
        size?: complexType.UnitAndValue<number>;
        status: cloudDB.dump.Status;
        taskId?: string;
        url?: string;
    }
    interface standard_database_Extension {
        description: string;
        name: string;
        requiredExtensions: string[];
        status: cloudDB.standard.database.extension.Status;
    }
    namespace task {
        type Status = "cancelled" | "doing" | "done" | "error" | "todo";
    }
}
export declare namespace complexType {
    interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    interface UnitAndValue<T> {
        unit: string;
        value: T;
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
 * END API /cloudDB Models
 */
export declare function proxyCloudDB(ovhEngine: OvhRequestable): CloudDB;
export default proxyCloudDB;
/**
 * Api Proxy model
 */ export interface CloudDB {
    enterprise: {
        cluster: {
            $get(): Promise<string[]>;
            $(clusterId: string): {
                $get(): Promise<cloudDB.enterprise_Cluster>;
                $put(params?: {
                    autoBackup?: boolean;
                    backupSize?: number;
                    creationDate?: string;
                    hostCount?: number;
                    id?: string;
                    lastUpdate?: string;
                    name?: string;
                    offerName?: string;
                    offerType?: cloudDB.enterprise.Offer.TypeEnum;
                    regionName?: string;
                    restoredVolumeSize?: number;
                    status?: cloudDB.enterprise.Cluster.StatusEnum;
                    taskId?: string;
                    version?: string;
                }): Promise<void>;
                backup: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        clusterId: string;
                        name: string;
                    }): Promise<cloudDB.enterprise_Cluster_Backup>;
                    $(backupId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloudDB.enterprise_Cluster_Backup>;
                    };
                };
                confirmTermination: {
                    $post(params: {
                        commentary?: string;
                        futureUse?: service.TerminationFutureUseEnum;
                        reason?: service.TerminationReasonEnum;
                        token: string;
                    }): Promise<string>;
                };
                endpoint: {
                    $get(): Promise<string[]>;
                    $(endpointId: string): {
                        $get(): Promise<cloudDB.enterprise_Cluster_Endpoint>;
                    };
                };
                host: {
                    $get(): Promise<string[]>;
                    $(hostId: string): {
                        $get(): Promise<cloudDB.enterprise_Cluster_Host>;
                    };
                };
                logs: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        note?: string;
                        username: string;
                    }): Promise<cloudDB.enterprise_Cluster_LdpMember>;
                    $(logsId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloudDB.enterprise_Cluster_LdpMember>;
                    };
                };
                maintenance: {
                    $get(): Promise<string[]>;
                    $(maintenanceId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloudDB.enterprise_Cluster_Maintenance>;
                    };
                };
                maintenanceWindow: {
                    $delete(): Promise<void>;
                    $get(): Promise<cloudDB.enterprise_Cluster_MaintenanceWindow>;
                    $post(params?: {
                        dayOfWeek?: number;
                        duration?: number;
                        startTime?: string;
                    }): Promise<cloudDB.enterprise_Cluster_MaintenanceWindow>;
                    $put(params?: {
                        clusterId?: string;
                        creationDate?: string;
                        dayOfWeek?: number;
                        duration?: number;
                        id?: string;
                        lastUpdate?: string;
                        startTime?: string;
                        status?: cloudDB.enterprise.MaintenanceWindow.StatusEnum;
                        taskId?: string;
                    }): Promise<void>;
                };
                restore: {
                    $get(): Promise<string[]>;
                    $post(params?: {
                        backupId?: string;
                        timestamp?: string;
                    }): Promise<cloudDB.enterprise_Cluster_Restore>;
                    $(restoreId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloudDB.enterprise_Cluster_Restore>;
                        user: {
                            $get(): Promise<cloudDB.enterprise_Cluster_Restore_User>;
                            $post(params: {
                                password: string;
                            }): Promise<cloudDB.enterprise_Cluster_Restore_User>;
                        };
                    };
                };
                scale: {
                    $post(params: {
                        count: number;
                    }): Promise<cloudDB.enterprise_Cluster>;
                };
                securityGroup: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        clusterId: string;
                        name: string;
                    }): Promise<cloudDB.enterprise_Cluster_SecurityGroup>;
                    $(securityGroupId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloudDB.enterprise_Cluster_SecurityGroup>;
                        $put(params?: {
                            clusterId?: string;
                            creationDate?: string;
                            id?: string;
                            lastUpdate?: string;
                            name?: string;
                            rulesCount?: number;
                            status?: cloudDB.enterprise.SecurityGroup.StatusEnum;
                            taskId?: string;
                        }): Promise<void>;
                        rule: {
                            $get(): Promise<string[]>;
                            $post(params: {
                                source: string;
                            }): Promise<cloudDB.enterprise_Cluster_SecurityGroup_Rule>;
                            $(ruleId: string): {
                                $delete(): Promise<void>;
                                $get(): Promise<cloudDB.enterprise_Cluster_SecurityGroup_Rule>;
                            };
                        };
                    };
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
                task: {
                    $get(params?: {
                        function_?: string;
                        status?: cloudDB.task.Status;
                    }): Promise<string[]>;
                    $(taskId: string): {
                        $get(): Promise<cloudDB.Task>;
                    };
                };
                terminate: {
                    $post(): Promise<string>;
                };
                user: {
                    $get(): Promise<cloudDB.enterprise_Cluster_User>;
                    $post(params: {
                        password: string;
                    }): Promise<cloudDB.enterprise_Cluster_User>;
                };
            };
        };
        offer: {
            $get(): Promise<string[]>;
            $(offerName: string): {
                $get(): Promise<cloudDB.enterprise_Offer>;
                region: {
                    $get(): Promise<string[]>;
                    $(regionName: string): {
                        $get(): Promise<cloudDB.enterprise_Offer_Region>;
                    };
                };
            };
        };
        region: {
            $get(): Promise<string[]>;
            $(regionName: string): {
                $get(): Promise<cloudDB.enterprise_Region>;
            };
        };
    };
    /**
     * Operations about the CLOUDDB service
     * List available services
     */
    get(path: '/cloudDB/enterprise/cluster'): () => Promise<string[]>;
    /**
     * Cluster
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}'): (params: {
        clusterId: string;
    }) => Promise<cloudDB.enterprise_Cluster>;
    /**
     * List the cloudDB.enterprise.Cluster.Backup objects
     * Backups of this cluster
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/backup'): (params: {
        clusterId: string;
    }) => Promise<string[]>;
    /**
     * Backup
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}'): (params: {
        backupId: string;
        clusterId: string;
    }) => Promise<cloudDB.enterprise_Cluster_Backup>;
    /**
     * List the cloudDB.enterprise.Cluster.Endpoint objects
     * Cluster endpoints
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/endpoint'): (params: {
        clusterId: string;
    }) => Promise<string[]>;
    /**
     * Endpoints
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/endpoint/{endpointId}'): (params: {
        clusterId: string;
        endpointId: string;
    }) => Promise<cloudDB.enterprise_Cluster_Endpoint>;
    /**
     * List the cloudDB.enterprise.Cluster.Host objects
     * Hosts of this cluster
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/host'): (params: {
        clusterId: string;
    }) => Promise<string[]>;
    /**
     * Host
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/host/{hostId}'): (params: {
        clusterId: string;
        hostId: string;
    }) => Promise<cloudDB.enterprise_Cluster_Host>;
    /**
     * List the cloudDB.enterprise.Cluster.LdpMember objects
     * Logs access for this cluster
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/logs'): (params: {
        clusterId: string;
    }) => Promise<string[]>;
    /**
     * Member
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}'): (params: {
        clusterId: string;
        logsId: string;
    }) => Promise<cloudDB.enterprise_Cluster_LdpMember>;
    /**
     * List the cloudDB.enterprise.Cluster.Maintenance objects
     * Cluster maintenances
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenance'): (params: {
        clusterId: string;
    }) => Promise<string[]>;
    /**
     * Maintenance window
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}'): (params: {
        clusterId: string;
        maintenanceId: string;
    }) => Promise<cloudDB.enterprise_Cluster_Maintenance>;
    /**
     * Maintenance window
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {
        clusterId: string;
    }) => Promise<cloudDB.enterprise_Cluster_MaintenanceWindow>;
    /**
     * List the cloudDB.enterprise.Cluster.Restore objects
     * Restores of this cluster
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/restore'): (params: {
        clusterId: string;
    }) => Promise<string[]>;
    /**
     * Restore
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}'): (params: {
        clusterId: string;
        restoreId: string;
    }) => Promise<cloudDB.enterprise_Cluster_Restore>;
    /**
     * User
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user'): (params: {
        clusterId: string;
        restoreId: string;
    }) => Promise<cloudDB.enterprise_Cluster_Restore_User>;
    /**
     * List the cloudDB.enterprise.Cluster.SecurityGroup objects
     * Cluster security groups
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup'): (params: {
        clusterId: string;
    }) => Promise<string[]>;
    /**
     * Security group
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}'): (params: {
        clusterId: string;
        securityGroupId: string;
    }) => Promise<cloudDB.enterprise_Cluster_SecurityGroup>;
    /**
     * List the cloudDB.enterprise.Cluster.SecurityGroup.Rule objects
     * Security group rules
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule'): (params: {
        clusterId: string;
        securityGroupId: string;
    }) => Promise<string[]>;
    /**
     * Security group rule
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}'): (params: {
        clusterId: string;
        ruleId: string;
        securityGroupId: string;
    }) => Promise<cloudDB.enterprise_Cluster_SecurityGroup_Rule>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/serviceInfos'): (params: {
        clusterId: string;
    }) => Promise<services.Service>;
    /**
     * List the cloudDB.Task objects
     * Cluster tasks
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/task'): (params: {
        clusterId: string;
        function_?: string;
        status?: cloudDB.task.Status;
    }) => Promise<string[]>;
    /**
     * Tasks
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/task/{taskId}'): (params: {
        clusterId: string;
        taskId: string;
    }) => Promise<cloudDB.Task>;
    /**
     * User
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/cluster/{clusterId}/user'): (params: {
        clusterId: string;
    }) => Promise<cloudDB.enterprise_Cluster_User>;
    /**
     * List the cloudDB.enterprise.Offer objects
     * Offers with their capabilities
     */
    get(path: '/cloudDB/enterprise/offer'): () => Promise<string[]>;
    /**
     * Offer
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/offer/{offerName}'): (params: {
        offerName: string;
    }) => Promise<cloudDB.enterprise_Offer>;
    /**
     * List the cloudDB.enterprise.Offer.Region objects
     * Regions of this offer
     */
    get(path: '/cloudDB/enterprise/offer/{offerName}/region'): (params: {
        offerName: string;
    }) => Promise<string[]>;
    /**
     * Offer capabilities for this region
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/offer/{offerName}/region/{regionName}'): (params: {
        offerName: string;
        regionName: string;
    }) => Promise<cloudDB.enterprise_Offer_Region>;
    /**
     * List the cloudDB.enterprise.Region objects
     * Regions with their capabilities
     */
    get(path: '/cloudDB/enterprise/region'): () => Promise<string[]>;
    /**
     * Region
     * Get this object properties
     */
    get(path: '/cloudDB/enterprise/region/{regionName}'): (params: {
        regionName: string;
    }) => Promise<cloudDB.enterprise_Region>;
    /**
     * Cluster
     * Alter this object properties
     */
    put(path: '/cloudDB/enterprise/cluster/{clusterId}'): (params: {
        clusterId: string;
        autoBackup?: boolean;
        backupSize?: number;
        creationDate?: string;
        hostCount?: number;
        id?: string;
        lastUpdate?: string;
        name?: string;
        offerName?: string;
        offerType?: cloudDB.enterprise.Offer.TypeEnum;
        regionName?: string;
        restoredVolumeSize?: number;
        status?: cloudDB.enterprise.Cluster.StatusEnum;
        taskId?: string;
        version?: string;
    }) => Promise<void>;
    /**
     * Maintenance window
     * Alter this object properties
     */
    put(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {
        clusterId: string;
        creationDate?: string;
        dayOfWeek?: number;
        duration?: number;
        id?: string;
        lastUpdate?: string;
        startTime?: string;
        status?: cloudDB.enterprise.MaintenanceWindow.StatusEnum;
        taskId?: string;
    }) => Promise<void>;
    /**
     * Security group
     * Alter this object properties
     */
    put(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}'): (params: {
        clusterId: string;
        securityGroupId: string;
        creationDate?: string;
        id?: string;
        lastUpdate?: string;
        name?: string;
        rulesCount?: number;
        status?: cloudDB.enterprise.SecurityGroup.StatusEnum;
        taskId?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/cloudDB/enterprise/cluster/{clusterId}/serviceInfos'): (params: {
        clusterId: string;
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
     * List the cloudDB.enterprise.Cluster.Backup objects
     * Create a cluster backup
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/backup'): (params: {
        clusterId: string;
        name: string;
    }) => Promise<cloudDB.enterprise_Cluster_Backup>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/confirmTermination'): (params: {
        clusterId: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * List the cloudDB.enterprise.Cluster.LdpMember objects
     * Grant access to cluster logs
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/logs'): (params: {
        clusterId: string;
        note?: string;
        username: string;
    }) => Promise<cloudDB.enterprise_Cluster_LdpMember>;
    /**
     * Maintenance window
     * Add a maintenance window to this cluster
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {
        clusterId: string;
        dayOfWeek?: number;
        duration?: number;
        startTime?: string;
    }) => Promise<cloudDB.enterprise_Cluster_MaintenanceWindow>;
    /**
     * List the cloudDB.enterprise.Cluster.Restore objects
     * Create a cluster restore at a given point in time
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/restore'): (params: {
        clusterId: string;
        backupId?: string;
        timestamp?: string;
    }) => Promise<cloudDB.enterprise_Cluster_Restore>;
    /**
     * User
     * Create a user on this restored instance
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user'): (params: {
        clusterId: string;
        restoreId: string;
        password: string;
    }) => Promise<cloudDB.enterprise_Cluster_Restore_User>;
    /**
     * scale operations
     * Scale a cluster
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/scale'): (params: {
        clusterId: string;
        count: number;
    }) => Promise<cloudDB.enterprise_Cluster>;
    /**
     * List the cloudDB.enterprise.Cluster.SecurityGroup objects
     * Add a security group to this cluster
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup'): (params: {
        clusterId: string;
        name: string;
    }) => Promise<cloudDB.enterprise_Cluster_SecurityGroup>;
    /**
     * List the cloudDB.enterprise.Cluster.SecurityGroup.Rule objects
     * Add a rule to this security group
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule'): (params: {
        clusterId: string;
        securityGroupId: string;
        source: string;
    }) => Promise<cloudDB.enterprise_Cluster_SecurityGroup_Rule>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/terminate'): (params: {
        clusterId: string;
    }) => Promise<string>;
    /**
     * User
     * Create a user on this cluster
     */
    post(path: '/cloudDB/enterprise/cluster/{clusterId}/user'): (params: {
        clusterId: string;
        password: string;
    }) => Promise<cloudDB.enterprise_Cluster_User>;
    /**
     * Backup
     * Delete a cluster backup
     */
    delete(path: '/cloudDB/enterprise/cluster/{clusterId}/backup/{backupId}'): (params: {
        backupId: string;
        clusterId: string;
    }) => Promise<void>;
    /**
     * Member
     * Revoke access to cluster's logs
     */
    delete(path: '/cloudDB/enterprise/cluster/{clusterId}/logs/{logsId}'): (params: {
        clusterId: string;
        logsId: string;
    }) => Promise<void>;
    /**
     * Maintenance window
     * Delete the maintenance
     */
    delete(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenance/{maintenanceId}'): (params: {
        clusterId: string;
        maintenanceId: string;
    }) => Promise<void>;
    /**
     * Maintenance window
     * Delete the maintenance window
     */
    delete(path: '/cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow'): (params: {
        clusterId: string;
    }) => Promise<void>;
    /**
     * Restore
     * Delete a restore
     */
    delete(path: '/cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}'): (params: {
        clusterId: string;
        restoreId: string;
    }) => Promise<void>;
    /**
     * Security group
     * Delete a security group from this cluster
     */
    delete(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}'): (params: {
        clusterId: string;
        securityGroupId: string;
    }) => Promise<void>;
    /**
     * Security group rule
     * Delete a rule from this security group
     */
    delete(path: '/cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}/rule/{ruleId}'): (params: {
        clusterId: string;
        ruleId: string;
        securityGroupId: string;
    }) => Promise<void>;
}

import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cloudDB Models
 * Source: https://eu.api.ovh.com/1.0/cloudDB.json
 */
export namespace cloudDB {
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
    export namespace enterprise {
        export namespace Backup {
            /**
             * Backup status
             * type fullname: cloudDB.enterprise.Backup.StatusEnum
             */
            export type StatusEnum = "archived" | "archiving" | "created" | "creating" | "deleting"
        }
        /**
         * Cluster
         * interface fullName: cloudDB.enterprise.Cluster.Cluster
         */
        export interface Cluster {
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
            /**
             * Backup
             * interface fullName: cloudDB.enterprise.Cluster.Backup.Backup
             */
            export interface Backup {
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
             * interface fullName: cloudDB.enterprise.Cluster.Endpoint.Endpoint
             */
            export interface Endpoint {
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
             * interface fullName: cloudDB.enterprise.Cluster.Host.Host
             */
            export interface Host {
                creationDate: string;
                id: string;
                lastUpdate: string;
                name: string;
                status?: cloudDB.enterprise.Host.StatusEnum;
                taskId?: string;
            }
            /**
             * Member
             * interface fullName: cloudDB.enterprise.Cluster.LdpMember.LdpMember
             */
            export interface LdpMember {
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
             * interface fullName: cloudDB.enterprise.Cluster.Maintenance.Maintenance
             */
            export interface Maintenance {
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
             * interface fullName: cloudDB.enterprise.Cluster.MaintenanceWindow.MaintenanceWindow
             */
            export interface MaintenanceWindow {
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
             * interface fullName: cloudDB.enterprise.Cluster.Restore.Restore
             */
            export interface Restore {
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
                /**
                 * User
                 * interface fullName: cloudDB.enterprise.Cluster.Restore.User.User
                 */
                export interface User {
                    creationDate: string;
                    id: string;
                    lastUpdate: string;
                    name: string;
                    restoreId: string;
                    status: cloudDB.enterprise.Restore.User.StatusEnum;
                    taskId?: string;
                }
            }
            /**
             * Security group
             * interface fullName: cloudDB.enterprise.Cluster.SecurityGroup.SecurityGroup
             */
            export interface SecurityGroup {
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
                /**
                 * Security group rule
                 * interface fullName: cloudDB.enterprise.Cluster.SecurityGroup.Rule.Rule
                 */
                export interface Rule {
                    creationDate: string;
                    id: string;
                    lastUpdate: string;
                    securityGroupId: string;
                    source: string;
                    status: cloudDB.enterprise.SecurityGroupRule.StatusEnum;
                    taskId?: string;
                }
            }
            /**
             * Cluster status
             * type fullname: cloudDB.enterprise.Cluster.StatusEnum
             */
            export type StatusEnum = "created" | "creating" | "deleting" | "reopening" | "restarting" | "scaling" | "suspended" | "suspending" | "updating"
            /**
             * User
             * interface fullName: cloudDB.enterprise.Cluster.User.User
             */
            export interface User {
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
        /**
         * Offer
         * interface fullName: cloudDB.enterprise.Offer.Offer
         */
        export interface Offer {
            creationDate: string;
            lastUpdate: string;
            maxHostCount?: number;
            minHostCount: number;
            name: string;
            status: cloudDB.enterprise.Offer.StatusEnum;
        }
        export namespace Offer {
            /**
             * Offer capabilities for this region
             * interface fullName: cloudDB.enterprise.Offer.Region.Region
             */
            export interface Region {
                hostLeft?: number;
                offerName: string;
                regionName: string;
                status: cloudDB.enterprise.Offer.Region.StatusEnum;
            }
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
        /**
         * Region
         * interface fullName: cloudDB.enterprise.Region.Region
         */
        export interface Region {
            creationDate: string;
            lastUpdate: string;
            maintenanceDayOfWeek: number;
            maintenanceDuration: number;
            maintenanceStartTime: string;
            name: string;
            status: cloudDB.enterprise.Region.StatusEnum;
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
    export namespace task {
        /**
         * Task status
         * type fullname: cloudDB.task.Status
         */
        export type Status = "cancelled" | "doing" | "done" | "error" | "todo"
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
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(clusterId: string): {
                /**
                 * Get this object properties
                 * GET /cloudDB/enterprise/cluster/{clusterId}
                 */
                $get(): Promise<cloudDB.enterprise.Cluster>;
                /**
                 * Alter this object properties
                 * PUT /cloudDB/enterprise/cluster/{clusterId}
                 */
                $put(params: { autoBackup: boolean, backupSize?: number, creationDate: string, hostCount?: number, id: string, lastUpdate: string, name: string, offerName: string, offerType: cloudDB.enterprise.Offer.TypeEnum, regionName: string, restoredVolumeSize?: number, status: cloudDB.enterprise.Cluster.StatusEnum, taskId?: string, version: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $post(params: { clusterId: string, name: string }): Promise<cloudDB.enterprise.Cluster.Backup>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $get(): Promise<cloudDB.enterprise.Cluster.Backup>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(endpointId: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/endpoint/{endpointId}
                         */
                        $get(): Promise<cloudDB.enterprise.Cluster.Endpoint>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(hostId: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/host/{hostId}
                         */
                        $get(): Promise<cloudDB.enterprise.Cluster.Host>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $post(params: { note?: string, username: string }): Promise<cloudDB.enterprise.Cluster.LdpMember>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $get(): Promise<cloudDB.enterprise.Cluster.LdpMember>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $get(): Promise<cloudDB.enterprise.Cluster.Maintenance>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $get(): Promise<cloudDB.enterprise.Cluster.MaintenanceWindow>;
                    /**
                     * Add a maintenance window to this cluster
                     * POST /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                     */
                    $post(params?: { dayOfWeek?: number, duration?: number, startTime?: string }): Promise<cloudDB.enterprise.Cluster.MaintenanceWindow>;
                    /**
                     * Alter this object properties
                     * PUT /cloudDB/enterprise/cluster/{clusterId}/maintenanceWindow
                     */
                    $put(params: { clusterId: string, creationDate: string, dayOfWeek: number, duration: number, id: string, lastUpdate: string, startTime: string, status: cloudDB.enterprise.MaintenanceWindow.StatusEnum, taskId?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $post(params?: { backupId?: string, timestamp?: string }): Promise<cloudDB.enterprise.Cluster.Restore>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $get(): Promise<cloudDB.enterprise.Cluster.Restore>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        user: {
                            /**
                             * Get this object properties
                             * GET /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user
                             */
                            $get(): Promise<cloudDB.enterprise.Cluster.Restore.User>;
                            /**
                             * Create a user on this restored instance
                             * POST /cloudDB/enterprise/cluster/{clusterId}/restore/{restoreId}/user
                             */
                            $post(params: { password: string }): Promise<cloudDB.enterprise.Cluster.Restore.User>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                scale: {
                    /**
                     * Scale a cluster
                     * POST /cloudDB/enterprise/cluster/{clusterId}/scale
                     */
                    $post(params: { count: number }): Promise<cloudDB.enterprise.Cluster>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $post(params: { clusterId: string, name: string }): Promise<cloudDB.enterprise.Cluster.SecurityGroup>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $get(): Promise<cloudDB.enterprise.Cluster.SecurityGroup>;
                        /**
                         * Alter this object properties
                         * PUT /cloudDB/enterprise/cluster/{clusterId}/securityGroup/{securityGroupId}
                         */
                        $put(params: { clusterId: string, creationDate: string, id: string, lastUpdate: string, name: string, rulesCount: number, status: cloudDB.enterprise.SecurityGroup.StatusEnum, taskId?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                            $post(params: { source: string }): Promise<cloudDB.enterprise.Cluster.SecurityGroup.Rule>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                                $get(): Promise<cloudDB.enterprise.Cluster.SecurityGroup.Rule>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $put(params: { canDeleteAtExpiration: boolean, contactAdmin: string, contactBilling: string, contactTech: string, creation: string, domain: string, engagedUpTo?: string, expiration: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType: service.RenewalTypeEnum, serviceId: number, status: service.StateEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/cluster/{clusterId}/task/{taskId}
                         */
                        $get(): Promise<cloudDB.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                user: {
                    /**
                     * Get this object properties
                     * GET /cloudDB/enterprise/cluster/{clusterId}/user
                     */
                    $get(): Promise<cloudDB.enterprise.Cluster.User>;
                    /**
                     * Create a user on this cluster
                     * POST /cloudDB/enterprise/cluster/{clusterId}/user
                     */
                    $post(params: { password: string }): Promise<cloudDB.enterprise.Cluster.User>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(offerName: string): {
                /**
                 * Get this object properties
                 * GET /cloudDB/enterprise/offer/{offerName}
                 */
                $get(): Promise<cloudDB.enterprise.Offer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                region: {
                    /**
                     * Regions of this offer
                     * GET /cloudDB/enterprise/offer/{offerName}/region
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(regionName: string): {
                        /**
                         * Get this object properties
                         * GET /cloudDB/enterprise/offer/{offerName}/region/{regionName}
                         */
                        $get(): Promise<cloudDB.enterprise.Offer.Region>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(regionName: string): {
                /**
                 * Get this object properties
                 * GET /cloudDB/enterprise/region/{regionName}
                 */
                $get(): Promise<cloudDB.enterprise.Region>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
}

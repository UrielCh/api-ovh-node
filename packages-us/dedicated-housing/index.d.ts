import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/housing Models
 * Source: https://api.us.ovhcloud.com/1.0/dedicated/housing.json
 */
export namespace complexType {
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValueCanBeNull.SafeKeyValueCanBeNull
     */
    export interface SafeKeyValueCanBeNull<T> {
        key?: string;
        value?: T;
    }
    /**
     * complexType.SafeKeyValueCanBeNull_string
     * interface fullName: complexType.SafeKeyValueCanBeNull_string.SafeKeyValueCanBeNull_string
     */
    export interface SafeKeyValueCanBeNull_string {
        key?: string;
        value: string;
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
export namespace dedicated {
    /**
     * different task operation
     * type fullname: dedicated.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "INFRA_002_VirtualNetworkInterface_group" | "INFRA_002_VirtualNetworkInterface_ungroup" | "INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_group" | "INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_ungroup" | "INFRA_ONE_NETWORK_VirtualNetworkInterface_group" | "INFRA_ONE_NETWORK_VirtualNetworkInterface_ungroup" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "hardware_update" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "reagregateBlock" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    /**
     * different task status
     * type fullname: dedicated.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace housing {
        /**
         * A structure describing informations for APC orderable for this housing bay
         * interface fullName: dedicated.housing.ApcOrderable.ApcOrderable
         */
        export interface ApcOrderable {
            free: boolean;
            orderable: boolean;
        }
        /**
         * Housing bay datacenters
         * type fullname: dedicated.housing.DatacenterEnum
         */
        export type DatacenterEnum = "gsw" | "pdc1"
        /**
         * Housing bay High Availablility offers
         * type fullname: dedicated.housing.HaRoutingOfferEnum
         */
        export type HaRoutingOfferEnum = "ha2x2" | "ha2x4"
        /**
         * A structure describing informations for High Availability routing service orderable for this housing bay
         * interface fullName: dedicated.housing.HaRoutingOrderable.HaRoutingOrderable
         */
        export interface HaRoutingOrderable {
            offer: dedicated.housing.HaRoutingOfferEnum[];
            orderable: boolean;
        }
        /**
         * Housing bay
         * interface fullName: dedicated.housing.Housing.Housing
         */
        export interface Housing {
            datacenter?: dedicated.housing.DatacenterEnum;
            name: string;
            network: dedicated.housing.NetworkInfo[];
            options: dedicated.housing.Options;
            rack: string;
            securityCode: string;
        }
        /**
         * Housing bay
         * interface fullName: dedicated.housing.HousingWithIAM.HousingWithIAM
         */
        export interface HousingWithIAM {
            datacenter?: dedicated.housing.DatacenterEnum;
            iam?: iam.ResourceMetadata;
            name: string;
            network: dedicated.housing.NetworkInfo[];
            options: dedicated.housing.Options;
            rack: string;
            securityCode: string;
        }
        /**
         * A structure describing the Bay's network configuration
         * interface fullName: dedicated.housing.IpInfo.IpInfo
         */
        export interface IpInfo {
            gateway?: string;
            network: string;
            reservedAddresses?: string[];
        }
        /**
         * A structure describing the Bay`s link information
         * interface fullName: dedicated.housing.LinkInfo.LinkInfo
         */
        export interface LinkInfo {
            port: string;
            router: string;
        }
        /**
         * A structure describing the Bay`s network configuration
         * interface fullName: dedicated.housing.NetworkInfo.NetworkInfo
         */
        export interface NetworkInfo {
            ipv4?: dedicated.housing.IpInfo;
            ipv6?: dedicated.housing.IpInfo;
            link?: dedicated.housing.LinkInfo;
        }
        /**
         * A structure describing current housing options
         * interface fullName: dedicated.housing.Options.Options
         */
        export interface Options {
            apcCount: number;
            handsneyes: boolean;
            highAvailabilityRouting: string;
        }
        /**
         * Housing tasks
         * interface fullName: dedicated.housing.Task.Task
         */
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.housing.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
        }
        /**
         * Distincts task
         * type fullname: dedicated.housing.TaskFunctionEnum
         */
        export type TaskFunctionEnum = "applyBackupFtpAcls" | "applyBackupFtpQuota" | "changePasswordBackupFTP" | "createBackupFTP" | "migrateBackupFTP" | "removeBackupFTP"
    }
    export namespace server {
        /**
         * Backup Ftp assigned to this server
         * interface fullName: dedicated.server.BackupFtp.BackupFtp
         */
        export interface BackupFtp {
            ftpBackupName: string;
            quota?: complexType.UnitAndValue<number>;
            readOnlyDate?: string;
            type: dedicated.server.BackupStorageTypeEnum;
            usage?: complexType.UnitAndValue<number>;
        }
        /**
         * Backup Ftp ACL for this server and Backup Ftp
         * interface fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
         */
        export interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        /**
         * Different backup storage type
         * type fullname: dedicated.server.BackupStorageTypeEnum
         */
        export type BackupStorageTypeEnum = "included" | "storage"
        /**
         * Server tasks
         * interface fullName: dedicated.server.Task.Task
         */
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            needSchedule: boolean;
            note?: string;
            plannedInterventionId?: number;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            tags?: complexType.SafeKeyValueCanBeNull<string>[];
            taskId: number;
            ticketReference?: string;
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
 * Api model for /dedicated/housing
 */
export interface Dedicated {
    housing: {
        /**
         * List available services
         * GET /dedicated/housing
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /dedicated/housing/{serviceName}
             */
            $get(): Promise<dedicated.housing.Housing>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            features: {
                backupFTP: {
                    /**
                     * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
                     * DELETE /dedicated/housing/{serviceName}/features/backupFTP
                     */
                    $delete(): Promise<dedicated.server.Task>;
                    /**
                     * Get this object properties
                     * GET /dedicated/housing/{serviceName}/features/backupFTP
                     */
                    $get(): Promise<dedicated.server.BackupFtp>;
                    /**
                     * Create a new Backup FTP space
                     * POST /dedicated/housing/{serviceName}/features/backupFTP
                     */
                    $post(): Promise<dedicated.server.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    access: {
                        /**
                         * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
                         * GET /dedicated/housing/{serviceName}/features/backupFTP/access
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a new Backup FTP ACL
                         * POST /dedicated/housing/{serviceName}/features/backupFTP/access
                         */
                        $post(params: { cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean }): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ipBlock: string): {
                            /**
                             * Revoke this ACL
                             * DELETE /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
                             */
                            $delete(): Promise<dedicated.server.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
                             */
                            $get(): Promise<dedicated.server.BackupFtpAcl>;
                            /**
                             * Alter this object properties
                             * PUT /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
                             */
                            $put(params?: { cifs?: boolean, ftp?: boolean, ipBlock?: string, isApplied?: boolean, lastUpdate?: string, nfs?: boolean }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    authorizableBlocks: {
                        /**
                         * Get all IP blocks that can be used in the ACL
                         * GET /dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    password: {
                        /**
                         * Change your Backup FTP password
                         * POST /dedicated/housing/{serviceName}/features/backupFTP/password
                         */
                        $post(): Promise<dedicated.server.Task>;
                    }
                }
            }
            orderable: {
                APC: {
                    /**
                     * Is an APC orderable for this housing bay
                     * GET /dedicated/housing/{serviceName}/orderable/APC
                     */
                    $get(): Promise<dedicated.housing.ApcOrderable>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /dedicated/housing/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /dedicated/housing/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * View task list
                 * GET /dedicated/housing/{serviceName}/task
                 */
                $get(params?: { function_?: dedicated.housing.TaskFunctionEnum, status?: dedicated.TaskStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /dedicated/housing/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<dedicated.housing.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    cancel: {
                        /**
                         * this action stop the task progression if it's possible
                         * POST /dedicated/housing/{serviceName}/task/{taskId}/cancel
                         */
                        $post(): Promise<void>;
                    }
                };
            }
        };
    }
}

export declare function proxyDedicatedHousing(ovhEngine: OvhRequestable): Dedicated;
export default proxyDedicatedHousing;

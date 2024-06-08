import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /veeamCloudConnect Models
 * Source: https://ca.api.soyoustart.com/1.0/veeamCloudConnect.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
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
export namespace veeamCloudConnect {
    /**
     * Veeam Cloud Connect
     * interface fullName: veeamCloudConnect.Account.Account
     */
    export interface Account {
        location: veeamCloudConnect.Location;
        productOffer: veeamCloudConnect.Offer;
        serviceName: string;
        vmCount?: number;
    }
    /**
     * Veeam Cloud Connect
     * interface fullName: veeamCloudConnect.AccountWithIAM.AccountWithIAM
     */
    export interface AccountWithIAM {
        iam?: iam.ResourceMetadata;
        location: veeamCloudConnect.Location;
        productOffer: veeamCloudConnect.Offer;
        serviceName: string;
        vmCount?: number;
    }
    /**
     * Veeam backup repository
     * interface fullName: veeamCloudConnect.BackupRepository.BackupRepository
     */
    export interface BackupRepository {
        inventoryName: string;
        quota: complexType.UnitAndValue<number>;
        quotaUsed?: complexType.UnitAndValue<number>;
        replicationZone?: veeamCloudConnect.Location;
        state: veeamCloudConnect.BackupRepositoryStateEnum;
        usage?: number;
    }
    /**
     * All states a Cloud Tenant backup repository can be in
     * type fullname: veeamCloudConnect.BackupRepositoryStateEnum
     */
    export type BackupRepositoryStateEnum = "configuring" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "removing"
    /**
     * All Location where cloud can be physically located
     * type fullname: veeamCloudConnect.Location
     */
    export type Location = "bhs1" | "rbx2" | "sbg1"
    /**
     * All orderable Veeam Cloud Connect offers
     * type fullname: veeamCloudConnect.Offer
     */
    export type Offer = "advanced" | "demo" | "starter"
    /**
     * Operation
     * interface fullName: veeamCloudConnect.Task.Task
     */
    export interface Task {
        endDate?: string;
        name: string;
        progress: number;
        startDate?: string;
        state: veeamCloudConnect.TaskStateEnum;
        taskId: number;
    }
    /**
     * All states a Cloud Tenant Task can be in
     * type fullname: veeamCloudConnect.TaskStateEnum
     */
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "problem" | "toCreate" | "todo" | "unknown" | "waitingTodo"
    /**
     * Details about Veeam Cloud Connect offer
     * interface fullName: veeamCloudConnect.offerCapabilities.offerCapabilities
     */
    export interface offerCapabilities {
        defaultQuota: number;
        maxQuota: number;
        maxStoragesCount: number;
        minimumUsage: number;
        multiStorages: boolean;
        replication: boolean;
        vmCapacity: number;
        wanAccelerator: boolean;
    }
}
/**
 * Api model for /veeamCloudConnect
 */
export interface VeeamCloudConnect {
    /**
     * List Veeam Cloud Connect services
     * GET /veeamCloudConnect
     */
    $get(params?: { iamTags?: any }): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get Veeam Cloud Connect
         * GET /veeamCloudConnect/{serviceName}
         */
        $get(): Promise<veeamCloudConnect.Account>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        backupRepository: {
            /**
             * List Veeam backup repositories
             * GET /veeamCloudConnect/{serviceName}/backupRepository
             */
            $get(): Promise<string[]>;
            /**
             * Create backup repository
             * POST /veeamCloudConnect/{serviceName}/backupRepository
             */
            $post(): Promise<veeamCloudConnect.Task[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(inventoryName: string): {
                /**
                 * Delete backup repository
                 * DELETE /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                 */
                $delete(): Promise<veeamCloudConnect.Task[]>;
                /**
                 * Get Veeam backup repository
                 * GET /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                 */
                $get(): Promise<veeamCloudConnect.BackupRepository>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgradeQuota: {
                    /**
                     * Change quota
                     * POST /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota
                     */
                    $post(params: { newQuota: number }): Promise<veeamCloudConnect.Task[]>;
                }
            };
        }
        capabilities: {
            /**
             * Get capabilities
             * GET /veeamCloudConnect/{serviceName}/capabilities
             */
            $get(): Promise<veeamCloudConnect.offerCapabilities>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        orderableUpgrade: {
            /**
             * Get available offer upgrades
             * GET /veeamCloudConnect/{serviceName}/orderableUpgrade
             */
            $get(): Promise<veeamCloudConnect.Offer[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        resetPassword: {
            /**
             * Reset password
             * POST /veeamCloudConnect/{serviceName}/resetPassword
             */
            $post(): Promise<veeamCloudConnect.Task>;
        }
        serviceInfos: {
            /**
             * Get service information
             * GET /veeamCloudConnect/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /veeamCloudConnect/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * List operations
             * GET /veeamCloudConnect/{serviceName}/task
             */
            $get(params?: { name?: string, state?: veeamCloudConnect.TaskStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get operation
                 * GET /veeamCloudConnect/{serviceName}/task/{taskId}
                 */
                $get(): Promise<veeamCloudConnect.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    };
}

export declare function proxyVeeamCloudConnect(ovhEngine: OvhRequestable): VeeamCloudConnect;
export default proxyVeeamCloudConnect;

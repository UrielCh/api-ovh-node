import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /veeamCloudConnect Models
 * Source: https://eu.api.ovh.com/1.0/veeamCloudConnect.json
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
     * Veeam Cloud Connect account
     * interface fullName: veeamCloudConnect.Account.Account
     */
    export interface Account {
        location: veeamCloudConnect.Location;
        productOffer: veeamCloudConnect.Offer;
        serviceName: string;
        vmCount?: number;
    }
    /**
     * Veeam Backup Repository
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
     * Operation with the Cloud Tenant Account
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
 * END API /veeamCloudConnect Models
 */
export function proxyVeeamCloudConnect(ovhEngine: OvhRequestable): VeeamCloudConnect {
    return buildOvhProxy(ovhEngine, '/veeamCloudConnect');
}
export default proxyVeeamCloudConnect;
/**
 * Api model for /veeamCloudConnect
 */
export interface VeeamCloudConnect {
    /**
     * List available services
     * GET /veeamCloudConnect
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /veeamCloudConnect/{serviceName}
         */
        $get(): Promise<veeamCloudConnect.Account>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        backupRepository: {
            /**
             * Veeam Backup Repository linked to this Veeam Cloud Connect account
             * GET /veeamCloudConnect/{serviceName}/backupRepository
             */
            $get(): Promise<string[]>;
            /**
             * Add a new Backup Repository to your professional account
             * POST /veeamCloudConnect/{serviceName}/backupRepository
             */
            $post(): Promise<veeamCloudConnect.Task[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(inventoryName: string): {
                /**
                 * Delete this backup Repository. 
                 * DELETE /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                 */
                $delete(): Promise<veeamCloudConnect.Task[]>;
                /**
                 * Get this object properties
                 * GET /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                 */
                $get(): Promise<veeamCloudConnect.BackupRepository>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                upgradeQuota: {
                    /**
                     * Change your quota
                     * POST /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota
                     */
                    $post(params: { newQuota: number }): Promise<veeamCloudConnect.Task[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        capabilities: {
            /**
             * Show capabilities of your current offer
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
             * List the possible upgrades on your Veeam Cloud Connect account
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
             * Reset your Cloud Tenant Password
             * POST /veeamCloudConnect/{serviceName}/resetPassword
             */
            $post(): Promise<veeamCloudConnect.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /veeamCloudConnect/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
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
             * Tasks associated with Cloud Tenant
             * GET /veeamCloudConnect/{serviceName}/task
             */
            $get(params?: { name?: string, state?: veeamCloudConnect.TaskStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
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

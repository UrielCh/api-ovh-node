import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /veeamCloudConnect Models
 */
export declare namespace complexType {
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
export declare namespace veeamCloudConnect {
    interface Account {
        location: veeamCloudConnect.Location;
        productOffer: veeamCloudConnect.Offer;
        serviceName: string;
        vmCount?: number;
    }
    interface BackupRepository {
        inventoryName: string;
        quota: complexType.UnitAndValue<number>;
        quotaUsed?: complexType.UnitAndValue<number>;
        replicationZone?: veeamCloudConnect.Location;
        state: veeamCloudConnect.BackupRepositoryStateEnum;
        usage?: number;
    }
    type BackupRepositoryStateEnum = "configuring" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "removing";
    type Location = "bhs1" | "rbx2" | "sbg1";
    type Offer = "advanced" | "demo" | "starter";
    interface Task {
        endDate?: string;
        name: string;
        progress: number;
        startDate?: string;
        state: veeamCloudConnect.TaskStateEnum;
        taskId: number;
    }
    type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "problem" | "toCreate" | "todo" | "unknown" | "waitingTodo";
    interface offerCapabilities {
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
export declare function proxyVeeamCloudConnect(ovhEngine: OvhRequestable): VeeamCloudConnect;
export default proxyVeeamCloudConnect;
/**
 * Api Proxy model
 */ export interface VeeamCloudConnect {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<veeamCloudConnect.Account>;
        backupRepository: {
            $get(): Promise<string[]>;
            $post(): Promise<veeamCloudConnect.Task[]>;
            $(inventoryName: string): {
                $delete(): Promise<veeamCloudConnect.Task[]>;
                $get(): Promise<veeamCloudConnect.BackupRepository>;
                upgradeQuota: {
                    $post(params: {
                        newQuota: number;
                    }): Promise<veeamCloudConnect.Task[]>;
                };
            };
        };
        capabilities: {
            $get(): Promise<veeamCloudConnect.offerCapabilities>;
        };
        orderableUpgrade: {
            $get(): Promise<veeamCloudConnect.Offer[]>;
        };
        resetPassword: {
            $post(): Promise<veeamCloudConnect.Task>;
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
                name?: string;
                state?: veeamCloudConnect.TaskStateEnum;
            }): Promise<number[]>;
            $(taskId: number): {
                $get(): Promise<veeamCloudConnect.Task>;
            };
        };
    };
    /**
     * Operations about the VEEAMCC service
     * List available services
     */
    get(path: '/veeamCloudConnect'): () => Promise<string[]>;
    /**
     * Veeam Cloud Connect account
     * Get this object properties
     */
    get(path: '/veeamCloudConnect/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<veeamCloudConnect.Account>;
    /**
     * List the veeamCloudConnect.BackupRepository objects
     * Veeam Backup Repository linked to this Veeam Cloud Connect account
     */
    get(path: '/veeamCloudConnect/{serviceName}/backupRepository'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Veeam Backup Repository
     * Get this object properties
     */
    get(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}'): (params: {
        inventoryName: string;
        serviceName: string;
    }) => Promise<veeamCloudConnect.BackupRepository>;
    /**
     * capabilities operations
     * Show capabilities of your current offer
     */
    get(path: '/veeamCloudConnect/{serviceName}/capabilities'): (params: {
        serviceName: string;
    }) => Promise<veeamCloudConnect.offerCapabilities>;
    /**
     * orderableUpgrade operations
     * List the possible upgrades on your Veeam Cloud Connect account
     */
    get(path: '/veeamCloudConnect/{serviceName}/orderableUpgrade'): (params: {
        serviceName: string;
    }) => Promise<veeamCloudConnect.Offer[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/veeamCloudConnect/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the veeamCloudConnect.Task objects
     * Tasks associated with Cloud Tenant
     */
    get(path: '/veeamCloudConnect/{serviceName}/task'): (params: {
        serviceName: string;
        name?: string;
        state?: veeamCloudConnect.TaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation with the Cloud Tenant Account
     * Get this object properties
     */
    get(path: '/veeamCloudConnect/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<veeamCloudConnect.Task>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/veeamCloudConnect/{serviceName}/serviceInfos'): (params: {
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
     * List the veeamCloudConnect.BackupRepository objects
     * Add a new Backup Repository to your professional account
     */
    post(path: '/veeamCloudConnect/{serviceName}/backupRepository'): (params: {
        serviceName: string;
    }) => Promise<veeamCloudConnect.Task[]>;
    /**
     * upgradeQuota operations
     * Change your quota
     */
    post(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota'): (params: {
        inventoryName: string;
        serviceName: string;
        newQuota: number;
    }) => Promise<veeamCloudConnect.Task[]>;
    /**
     * resetPassword operations
     * Reset your Cloud Tenant Password
     */
    post(path: '/veeamCloudConnect/{serviceName}/resetPassword'): (params: {
        serviceName: string;
    }) => Promise<veeamCloudConnect.Task>;
    /**
     * Veeam Backup Repository
     * Delete this backup Repository.
     */
    delete(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}'): (params: {
        inventoryName: string;
        serviceName: string;
    }) => Promise<veeamCloudConnect.Task[]>;
}

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /veeamCloudConnect Models
 * Source: https://ca.api.soyoustart.com/1.0/veeamCloudConnect.json
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
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
export namespace veeamCloudConnect {
    // interface fullName: veeamCloudConnect.Account.Account
    export interface Account {
        location: veeamCloudConnect.Location;
        productOffer: veeamCloudConnect.Offer;
        serviceName: string;
        vmCount?: number;
    }
    // interface fullName: veeamCloudConnect.BackupRepository.BackupRepository
    export interface BackupRepository {
        inventoryName: string;
        quota: complexType.UnitAndValue<number>;
        quotaUsed?: complexType.UnitAndValue<number>;
        replicationZone?: veeamCloudConnect.Location;
        state: veeamCloudConnect.BackupRepositoryStateEnum;
        usage?: number;
    }
    // type fullname: veeamCloudConnect.BackupRepositoryStateEnum
    export type BackupRepositoryStateEnum = "configuring" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "removing"
    // type fullname: veeamCloudConnect.Location
    export type Location = "bhs1" | "rbx2" | "sbg1"
    // type fullname: veeamCloudConnect.Offer
    export type Offer = "advanced" | "demo" | "starter"
    // interface fullName: veeamCloudConnect.Task.Task
    export interface Task {
        endDate?: string;
        name: string;
        progress: number;
        startDate?: string;
        state: veeamCloudConnect.TaskStateEnum;
        taskId: number;
    }
    // type fullname: veeamCloudConnect.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "problem" | "toCreate" | "todo" | "unknown" | "waitingTodo"
    // interface fullName: veeamCloudConnect.offerCapabilities.offerCapabilities
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
 * Api Proxy model
 */// Apis harmony
// path /veeamCloudConnect
export interface VeeamCloudConnect {
    // GET /veeamCloudConnect
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /veeamCloudConnect/{serviceName}
        $get(): Promise<veeamCloudConnect.Account>;
        backupRepository: {
            // GET /veeamCloudConnect/{serviceName}/backupRepository
            $get(): Promise<string[]>;
            // POST /veeamCloudConnect/{serviceName}/backupRepository
            $post(): Promise<veeamCloudConnect.Task[]>;
            $(inventoryName: string): {
                // DELETE /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                $delete(): Promise<veeamCloudConnect.Task[]>;
                // GET /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                $get(): Promise<veeamCloudConnect.BackupRepository>;
                upgradeQuota: {
                    // POST /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota
                    $post(params: { newQuota: number }): Promise<veeamCloudConnect.Task[]>;
                }
            };
        }
        capabilities: {
            // GET /veeamCloudConnect/{serviceName}/capabilities
            $get(): Promise<veeamCloudConnect.offerCapabilities>;
        }
        orderableUpgrade: {
            // GET /veeamCloudConnect/{serviceName}/orderableUpgrade
            $get(): Promise<veeamCloudConnect.Offer[]>;
        }
        resetPassword: {
            // POST /veeamCloudConnect/{serviceName}/resetPassword
            $post(): Promise<veeamCloudConnect.Task>;
        }
        serviceInfos: {
            // GET /veeamCloudConnect/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /veeamCloudConnect/{serviceName}/serviceInfos
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
        }
        task: {
            // GET /veeamCloudConnect/{serviceName}/task
            $get(params?: { name?: string, state?: veeamCloudConnect.TaskStateEnum }): Promise<number[]>;
            $(taskId: number): {
                // GET /veeamCloudConnect/{serviceName}/task/{taskId}
                $get(): Promise<veeamCloudConnect.Task>;
            };
        }
    };
}

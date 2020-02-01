import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /overTheBox Models
 * Source: https://eu.api.ovh.com/1.0/overTheBox.json
 */
export namespace order {
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace overTheBox {
    // type fullname: overTheBox.ActionStatusEnum
    export type ActionStatusEnum = "doing" | "done" | "error" | "todo"
    // interface fullName: overTheBox.AvailableDeviceAction.AvailableDeviceAction
    export interface AvailableDeviceAction {
        description: string;
        name: string;
    }
    // interface fullName: overTheBox.AvailableMigrationOffer.AvailableMigrationOffer
    export interface AvailableMigrationOffer {
        currentOfferPrice: order.Price;
        description: string;
        engagementMonths: number;
        hardwareAvailable: boolean;
        offer: string;
        price: order.Price;
    }
    // interface fullName: overTheBox.Backup.Backup
    export interface Backup {
        backupId: string;
        createdAt: string;
        deviceActionId?: string;
    }
    // interface fullName: overTheBox.Device.Device
    export interface Device {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
        networkInterfaces: overTheBox.DeviceInterface[];
        publicIp: string;
        systemVersion: string;
        version: string;
    }
    // interface fullName: overTheBox.DeviceAction.DeviceAction
    export interface DeviceAction {
        actionId: string;
        createdAt: string;
        details: string;
        name: string;
        status: overTheBox.ActionStatusEnum;
        todoDate: string;
        updatedAt: string;
    }
    // interface fullName: overTheBox.DeviceForRegistration.DeviceForRegistration
    export interface DeviceForRegistration {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
    }
    // interface fullName: overTheBox.DeviceInterface.DeviceInterface
    export interface DeviceInterface {
        device?: string;
        dnsServers?: string[];
        gateway?: string;
        ip?: string;
        multipathStatus: overTheBox.MultipathStatusEnum;
        name: string;
        netmask?: string;
        publicIp?: string;
    }
    // interface fullName: overTheBox.GraphEndpoint.GraphEndpoint
    export interface GraphEndpoint {
        host: string;
        readToken: string;
        readTokenID: string;
    }
    // type fullname: overTheBox.MultipathStatusEnum
    export type MultipathStatusEnum = "backup" | "handover" | "master" | "off" | "on"
    // interface fullName: overTheBox.RemoteAccess.RemoteAccess
    export interface RemoteAccess {
        accepted: boolean;
        askDate: string;
        authorizedBy?: string;
        connectionInfos: overTheBox.RemoteAccessConnectionInfos;
        expirationDate: string;
        exposedPort: number;
        remoteAccessId: string;
        remoteUserInfos: overTheBox.RemoteAccessUserInfos;
        status: overTheBox.RemoteAccessStatusEnum;
    }
    // interface fullName: overTheBox.RemoteAccessConnectionInfos.RemoteAccessConnectionInfos
    export interface RemoteAccessConnectionInfos {
        ip?: string;
        port?: number;
    }
    // type fullname: overTheBox.RemoteAccessStatusEnum
    export type RemoteAccessStatusEnum = "active" | "creating" | "deleted" | "deleting" | "pendingValidation" | "toDelete"
    // interface fullName: overTheBox.RemoteAccessUserInfos.RemoteAccessUserInfos
    export interface RemoteAccessUserInfos {
        ip: string;
        publicKey?: string;
        user: string;
    }
    // interface fullName: overTheBox.Service.Service
    export interface Service {
        SOCKSProxyEnabled: boolean;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        releaseChannel: string;
        serviceName: string;
        status: overTheBox.ServiceStatusEnum;
        tunnelMode: overTheBox.TunnelModeEnum;
    }
    // type fullname: overTheBox.ServiceStatusEnum
    export type ServiceStatusEnum = "active" | "creating" | "deleted" | "suspended" | "toCreate" | "toDelete"
    // interface fullName: overTheBox.Task.Task
    export interface Task {
        name: string;
        status: overTheBox.TaskStatusEnum;
        taskId: string;
    }
    // type fullname: overTheBox.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "todo"
    // interface fullName: overTheBox.TemporaryLogsLink.TemporaryLogsLink
    export interface TemporaryLogsLink {
        expirationDate: string;
        url: string;
    }
    // type fullname: overTheBox.TunnelModeEnum
    export type TunnelModeEnum = "glorytun" | "glorytun_hybrid" | "glorytun_mud"
}
export namespace price {
    export namespace OverTheBox {
        // type fullname: price.OverTheBox.OfferEnum
        export type OfferEnum = "plus.v1"
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

/**
 * END API /overTheBox Models
 */
export function proxyOverTheBox(ovhEngine: OvhRequestable): OverTheBox {
    return buildOvhProxy(ovhEngine, '/overTheBox');
}
export default proxyOverTheBox;
/**
 * Api Proxy model
 */// Apis harmony
// path /overTheBox
export interface OverTheBox {
    // GET /overTheBox
    $get(): Promise<string[]>;
    availableOffers: {
        // GET /overTheBox/availableOffers
        $get(): Promise<price.OverTheBox.OfferEnum[]>;
    }
    devices: {
        // POST /overTheBox/devices
        $post(): Promise<overTheBox.DeviceForRegistration[]>;
    }
    $(serviceName: string): {
        // DELETE /overTheBox/{serviceName}
        $delete(): Promise<void>;
        // GET /overTheBox/{serviceName}
        $get(): Promise<overTheBox.Service>;
        // PUT /overTheBox/{serviceName}
        $put(params?: {SOCKSProxyEnabled?: boolean, customerDescription?: string, graphEndpoint?: overTheBox.GraphEndpoint, releaseChannel?: string, serviceName?: string, status?: overTheBox.ServiceStatusEnum, tunnelMode?: overTheBox.TunnelModeEnum}): Promise<void>;
        availableReleaseChannels: {
            // GET /overTheBox/{serviceName}/availableReleaseChannels
            $get(): Promise<string[]>;
        }
        backups: {
            // GET /overTheBox/{serviceName}/backups
            $get(): Promise<string[]>;
            $(backupId: string): {
                // GET /overTheBox/{serviceName}/backups/{backupId}
                $get(): Promise<overTheBox.Backup>;
            };
        }
        cancelResiliation: {
            // POST /overTheBox/{serviceName}/cancelResiliation
            $post(): Promise<void>;
        }
        changeContact: {
            // POST /overTheBox/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        device: {
            // DELETE /overTheBox/{serviceName}/device
            $delete(): Promise<void>;
            // GET /overTheBox/{serviceName}/device
            $get(): Promise<overTheBox.Device>;
            actions: {
                // GET /overTheBox/{serviceName}/device/actions
                $get(params?: {name?: string, status?: overTheBox.ActionStatusEnum}): Promise<string[]>;
                // POST /overTheBox/{serviceName}/device/actions
                $post(params: {name: string}): Promise<overTheBox.DeviceAction>;
                $(actionId: string): {
                    // GET /overTheBox/{serviceName}/device/actions/{actionId}
                    $get(): Promise<overTheBox.DeviceAction>;
                };
            }
            availableActions: {
                // GET /overTheBox/{serviceName}/device/availableActions
                $get(): Promise<overTheBox.AvailableDeviceAction[]>;
            }
            backup: {
                // POST /overTheBox/{serviceName}/device/backup
                $post(): Promise<overTheBox.DeviceAction>;
            }
            logs: {
                // POST /overTheBox/{serviceName}/device/logs
                $post(): Promise<overTheBox.TemporaryLogsLink>;
            }
            restoreBackup: {
                // POST /overTheBox/{serviceName}/device/restoreBackup
                $post(params: {backupId: string}): Promise<overTheBox.DeviceAction[]>;
            }
        }
        linkDevice: {
            // POST /overTheBox/{serviceName}/linkDevice
            $post(params: {deviceId: string}): Promise<void>;
        }
        migration: {
            offers: {
                // GET /overTheBox/{serviceName}/migration/offers
                $get(): Promise<overTheBox.AvailableMigrationOffer[]>;
            }
        }
        remoteAccesses: {
            // GET /overTheBox/{serviceName}/remoteAccesses
            $get(): Promise<string[]>;
            // POST /overTheBox/{serviceName}/remoteAccesses
            $post(params: {allowedIp?: string, expirationDate?: string, exposedPort: number, publicKey?: string}): Promise<overTheBox.RemoteAccess>;
            $(remoteAccessId: string): {
                // DELETE /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                $delete(): Promise<void>;
                // GET /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                $get(): Promise<overTheBox.RemoteAccess>;
                authorize: {
                    // POST /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize
                    $post(): Promise<void>;
                }
            };
        }
        serviceInfos: {
            // GET /overTheBox/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /overTheBox/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        tasks: {
            // GET /overTheBox/{serviceName}/tasks
            $get(params?: {name?: string, status?: overTheBox.TaskStatusEnum}): Promise<string[]>;
            $(taskId: string): {
                // GET /overTheBox/{serviceName}/tasks/{taskId}
                $get(): Promise<overTheBox.Task>;
            };
        }
    };
}

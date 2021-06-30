import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /overTheBox Models
 * Source: https://eu.api.ovh.com/1.0/overTheBox.json
 */
export namespace order {
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * Price with it's currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace overTheBox {
    /**
     * Status of a task.
     * type fullname: overTheBox.ActionStatusEnum
     */
    export type ActionStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Device action
     * interface fullName: overTheBox.AvailableDeviceAction.AvailableDeviceAction
     */
    export interface AvailableDeviceAction {
        description: string;
        name: string;
    }
    /**
     * Migration offer
     * interface fullName: overTheBox.AvailableMigrationOffer.AvailableMigrationOffer
     */
    export interface AvailableMigrationOffer {
        currentOfferPrice: order.Price;
        description: string;
        engagementMonths: number;
        hardwareAvailable: boolean;
        offer: string;
        price: order.Price;
    }
    /**
     * Status of the service
     * type fullname: overTheBox.AvailableStatusEnum
     */
    export type AvailableStatusEnum = "disabled" | "enabled"
    /**
     * Backup
     * interface fullName: overTheBox.Backup.Backup
     */
    export interface Backup {
        backupId: string;
        createdAt: string;
        deviceActionId?: string;
    }
    /**
     * Device
     * interface fullName: overTheBox.Device.Device
     */
    export interface Device {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
        networkInterfaces: overTheBox.DeviceInterface[];
        publicIp: string;
        systemVersion: string;
        version: string;
    }
    /**
     * Device action
     * interface fullName: overTheBox.DeviceAction.DeviceAction
     */
    export interface DeviceAction {
        actionId: string;
        createdAt: string;
        details: string;
        name: string;
        status: overTheBox.ActionStatusEnum;
        todoDate: string;
        updatedAt: string;
    }
    /**
     * A device for registration
     * interface fullName: overTheBox.DeviceForRegistration.DeviceForRegistration
     */
    export interface DeviceForRegistration {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
    }
    /**
     * Infos about a network interface
     * interface fullName: overTheBox.DeviceInterface.DeviceInterface
     */
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
    /**
     * Parameters required to query metrics from OpenTSDB
     * interface fullName: overTheBox.GraphEndpoint.GraphEndpoint
     */
    export interface GraphEndpoint {
        host: string;
        readToken: string;
        readTokenID: string;
    }
    /**
     * Status of a MPTCP Interface.
     * type fullname: overTheBox.MultipathStatusEnum
     */
    export type MultipathStatusEnum = "backup" | "handover" | "master" | "off" | "on"
    /**
     * If authorized, a remote access will expose a port, allowing an access to the device remotely
     * interface fullName: overTheBox.RemoteAccess.RemoteAccess
     */
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
    /**
     * All the infos needed to connect yourself to your OTB
     * interface fullName: overTheBox.RemoteAccessConnectionInfos.RemoteAccessConnectionInfos
     */
    export interface RemoteAccessConnectionInfos {
        ip?: string;
        port?: number;
    }
    /**
     * Status of the remote access.
     * type fullname: overTheBox.RemoteAccessStatusEnum
     */
    export type RemoteAccessStatusEnum = "active" | "creating" | "deleted" | "deleting" | "pendingValidation" | "toDelete"
    /**
     * Infos about the remote user
     * interface fullName: overTheBox.RemoteAccessUserInfos.RemoteAccessUserInfos
     */
    export interface RemoteAccessUserInfos {
        ip: string;
        publicKey?: string;
        user: string;
    }
    /**
     * Service
     * interface fullName: overTheBox.Service.Service
     */
    export interface Service {
        SOCKSProxyEnabled: boolean;
        autoMTU: overTheBox.AvailableStatusEnum;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        releaseChannel: string;
        serviceName: string;
        status: overTheBox.ServiceStatusEnum;
        tunnelMode: overTheBox.TunnelModeEnum;
    }
    /**
     * Status of the service.
     * type fullname: overTheBox.ServiceStatusEnum
     */
    export type ServiceStatusEnum = "active" | "creating" | "deleted" | "suspended" | "toCreate" | "toDelete"
    /**
     * Task
     * interface fullName: overTheBox.Task.Task
     */
    export interface Task {
        name: string;
        status: overTheBox.TaskStatusEnum;
        taskId: string;
    }
    /**
     * Status of a task.
     * type fullname: overTheBox.TaskStatusEnum
     */
    export type TaskStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Temporary url informations
     * interface fullName: overTheBox.TemporaryLogsLink.TemporaryLogsLink
     */
    export interface TemporaryLogsLink {
        expirationDate: string;
        url: string;
    }
    /**
     * Tunnel mode of the service.
     * type fullname: overTheBox.TunnelModeEnum
     */
    export type TunnelModeEnum = "glorytun" | "glorytun_hybrid" | "glorytun_mud"
}
export namespace price {
    export namespace OverTheBox {
        /**
         * Enum of Offers
         * type fullname: price.OverTheBox.OfferEnum
         */
        export type OfferEnum = "plus.v1"
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
 * END API /overTheBox Models
 */
export function proxyOverTheBox(ovhEngine: OvhRequestable): OverTheBox {
    return buildOvhProxy(ovhEngine, '/overTheBox');
}
export default proxyOverTheBox;
/**
 * Api model for /overTheBox
 */
export interface OverTheBox {
    /**
     * List available services
     * GET /overTheBox
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    availableOffers: {
        /**
         * List the available offers for the new call
         * GET /overTheBox/availableOffers
         */
        $get(): Promise<price.OverTheBox.OfferEnum[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    devices: {
        /**
         * Get the list of devices connected from the same IP address
         * POST /overTheBox/devices
         */
        $post(): Promise<overTheBox.DeviceForRegistration[]>;
    }
    $(serviceName: string): {
        /**
         * Resiliate a service
         * DELETE /overTheBox/{serviceName}
         */
        $delete(): Promise<void>;
        /**
         * Get this object properties
         * GET /overTheBox/{serviceName}
         */
        $get(): Promise<overTheBox.Service>;
        /**
         * Alter this object properties
         * PUT /overTheBox/{serviceName}
         */
        $put(params?: { SOCKSProxyEnabled?: boolean, autoMTU?: overTheBox.AvailableStatusEnum, customerDescription?: string, graphEndpoint?: overTheBox.GraphEndpoint, releaseChannel?: string, serviceName?: string, status?: overTheBox.ServiceStatusEnum, tunnelMode?: overTheBox.TunnelModeEnum }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        autoMTU: {
            /**
             * Change the value of autoMTU
             * PUT /overTheBox/{serviceName}/autoMTU
             */
            $put(params: { mtuAuto: overTheBox.AvailableStatusEnum }): Promise<void>;
        }
        availableReleaseChannels: {
            /**
             * List available release channels for this service
             * GET /overTheBox/{serviceName}/availableReleaseChannels
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        backups: {
            /**
             * List of backups for this service
             * GET /overTheBox/{serviceName}/backups
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(backupId: string): {
                /**
                 * Get this object properties
                 * GET /overTheBox/{serviceName}/backups/{backupId}
                 */
                $get(): Promise<overTheBox.Backup>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        cancelResiliation: {
            /**
             * Cancel the resiliation of the Service
             * POST /overTheBox/{serviceName}/cancelResiliation
             */
            $post(): Promise<void>;
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /overTheBox/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        device: {
            /**
             * Unlink a device from a service
             * DELETE /overTheBox/{serviceName}/device
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /overTheBox/{serviceName}/device
             */
            $get(): Promise<overTheBox.Device>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            actions: {
                /**
                 * List of actions scheduled for this device
                 * GET /overTheBox/{serviceName}/device/actions
                 */
                $get(params?: { name?: string, status?: overTheBox.ActionStatusEnum }): Promise<string[]>;
                /**
                 * Create a device action on the device
                 * POST /overTheBox/{serviceName}/device/actions
                 */
                $post(params: { name: string }): Promise<overTheBox.DeviceAction>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(actionId: string): {
                    /**
                     * Get this object properties
                     * GET /overTheBox/{serviceName}/device/actions/{actionId}
                     */
                    $get(): Promise<overTheBox.DeviceAction>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            availableActions: {
                /**
                 * List the available device actions
                 * GET /overTheBox/{serviceName}/device/availableActions
                 */
                $get(): Promise<overTheBox.AvailableDeviceAction[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            backup: {
                /**
                 * Create an action to generate a backup
                 * POST /overTheBox/{serviceName}/device/backup
                 */
                $post(): Promise<overTheBox.DeviceAction>;
            }
            logs: {
                /**
                 * Generate a temporary url to retrieve device logs
                 * POST /overTheBox/{serviceName}/device/logs
                 */
                $post(): Promise<overTheBox.TemporaryLogsLink>;
            }
            restoreBackup: {
                /**
                 * Create a group of actions to restore a given backup
                 * POST /overTheBox/{serviceName}/device/restoreBackup
                 */
                $post(params: { backupId: string }): Promise<overTheBox.DeviceAction[]>;
            }
        }
        linkDevice: {
            /**
             * Link a device to this service
             * POST /overTheBox/{serviceName}/linkDevice
             */
            $post(params: { deviceId: string }): Promise<void>;
        }
        migration: {
            offers: {
                /**
                 * List all available offers one can migrate to
                 * GET /overTheBox/{serviceName}/migration/offers
                 */
                $get(): Promise<overTheBox.AvailableMigrationOffer[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        remoteAccesses: {
            /**
             * List of remote accesses for the service
             * GET /overTheBox/{serviceName}/remoteAccesses
             */
            $get(): Promise<string[]>;
            /**
             * Create a new remote access for the service
             * POST /overTheBox/{serviceName}/remoteAccesses
             */
            $post(params: { allowedIp?: string, expirationDate?: string, exposedPort: number, publicKey?: string }): Promise<overTheBox.RemoteAccess>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(remoteAccessId: string): {
                /**
                 * Delete a remote access
                 * DELETE /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                 */
                $get(): Promise<overTheBox.RemoteAccess>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                authorize: {
                    /**
                     * Authorize the remote access
                     * POST /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize
                     */
                    $post(): Promise<void>;
                }
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /overTheBox/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /overTheBox/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        tasks: {
            /**
             * List of tasks scheduled for this service
             * GET /overTheBox/{serviceName}/tasks
             */
            $get(params?: { name?: string, status?: overTheBox.TaskStatusEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: string): {
                /**
                 * Get this object properties
                 * GET /overTheBox/{serviceName}/tasks/{taskId}
                 */
                $get(): Promise<overTheBox.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    };
}

import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /overTheBox Models
 * Source: https://eu.api.ovh.com/1.0/overTheBox.json
 */
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
export namespace order {
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "INR" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
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
export namespace otb {
    /**
     * Statistics Period
     * type fullname: otb.DeviceStatisticsPeriodEnum
     */
    export type DeviceStatisticsPeriodEnum = "daily" | "hourly" | "monthly" | "weekly"
    /**
     * Serie Name
     * type fullname: otb.DeviceStatisticsTypeEnum
     */
    export type DeviceStatisticsTypeEnum = "load" | "memory_free" | "traffic"
    /**
     * Serie Unit
     * type fullname: otb.DeviceStatisticsUnitEnum
     */
    export type DeviceStatisticsUnitEnum = "bps" | "byte" | "n/a"
    export namespace device {
        /**
         * Device Statistics Datapoints
         * interface fullName: otb.device.statistics.statistics
         */
        export interface statistics {
            name: string;
            points: otb.device.statistics.point[];
            tags: otb.device.statistics.tag[];
            unit: otb.DeviceStatisticsUnitEnum;
        }
        export namespace statistics {
            /**
             * Statistics Datapoint
             * interface fullName: otb.device.statistics.point.point
             */
            export interface point {
                timestamp: number;
                value?: number;
            }
            /**
             * Tags for the metrics
             * interface fullName: otb.device.statistics.tag.tag
             */
            export interface tag {
                name: string;
                value?: string;
            }
        }
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
        availableUpdate: boolean;
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
     * Hardware properties
     * interface fullName: overTheBox.Hardware.Hardware
     */
    export interface Hardware {
        canBeLinkedToService: boolean;
        mac?: string;
        model: string;
        name: string;
        serial: string;
    }
    /**
     * Hardware properties
     * interface fullName: overTheBox.HardwareWithIAM.HardwareWithIAM
     */
    export interface HardwareWithIAM {
        canBeLinkedToService: boolean;
        iam?: iam.ResourceMetadata;
        mac?: string;
        model: string;
        name: string;
        serial: string;
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
        deletedAt?: string;
        dockerVersion: string;
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
    export type RemoteAccessStatusEnum = "active" | "creating" | "deleted" | "deleting" | "pendingValidation" | "recreating" | "toDelete" | "toRecreate"
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
        autoUpgrade: boolean;
        configurationMode: overTheBox.ServiceConfigurationModeEnum;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        releaseChannel: string;
        serviceName: string;
        status: overTheBox.ServiceStatusEnum;
        tunnelMode: overTheBox.TunnelModeEnum;
    }
    /**
     * Configuration mode of the service
     * type fullname: overTheBox.ServiceConfigurationModeEnum
     */
    export type ServiceConfigurationModeEnum = "autoconfigure" | "local"
    /**
     * Status of the service.
     * type fullname: overTheBox.ServiceStatusEnum
     */
    export type ServiceStatusEnum = "active" | "creating" | "deleted" | "suspended" | "toCreate" | "toDelete"
    /**
     * Service
     * interface fullName: overTheBox.ServiceWithIAM.ServiceWithIAM
     */
    export interface ServiceWithIAM {
        SOCKSProxyEnabled: boolean;
        autoMTU: overTheBox.AvailableStatusEnum;
        autoUpgrade: boolean;
        configurationMode: overTheBox.ServiceConfigurationModeEnum;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        iam?: iam.ResourceMetadata;
        releaseChannel: string;
        serviceName: string;
        status: overTheBox.ServiceStatusEnum;
        tunnelMode: overTheBox.TunnelModeEnum;
    }
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
    $get(params?: { iamTags?: any }): Promise<string[]>;
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
    hardware: {
        /**
         * List available services
         * GET /overTheBox/hardware
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        available: {
            /**
             * List hardware that can be linked to a service
             * GET /overTheBox/hardware/available
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(hardwareName: string): {
            /**
             * Get this object properties
             * GET /overTheBox/hardware/{hardwareName}
             */
            $get(): Promise<overTheBox.Hardware>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
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
        $put(params?: { SOCKSProxyEnabled?: boolean, autoMTU?: overTheBox.AvailableStatusEnum, autoUpgrade?: boolean, configurationMode?: overTheBox.ServiceConfigurationModeEnum, customerDescription?: string, graphEndpoint?: overTheBox.GraphEndpoint, releaseChannel?: string, serviceName?: string, status?: overTheBox.ServiceStatusEnum, tunnelMode?: overTheBox.TunnelModeEnum }): Promise<void>;
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
                 * Delete a backup
                 * DELETE /overTheBox/{serviceName}/backups/{backupId}
                 */
                $delete(): Promise<void>;
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
        linkHardware: {
            /**
             * Link an available hardware to this service
             * POST /overTheBox/{serviceName}/linkHardware
             */
            $post(params: { hardwareName: string }): Promise<void>;
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
             * Get service information
             * GET /overTheBox/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /overTheBox/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        statistics: {
            /**
             * Get statistics for an OTB device
             * GET /overTheBox/{serviceName}/statistics
             */
            $get(params: { metricsType: otb.DeviceStatisticsTypeEnum, period?: otb.DeviceStatisticsPeriodEnum }): Promise<otb.device.statistics[]>;
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

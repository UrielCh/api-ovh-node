import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace overTheBox {
    //overTheBox.ActionStatusEnum
    export type ActionStatusEnum = "doing" | "done" | "error" | "todo"
    //overTheBox.AvailableDeviceAction
    // fullName: overTheBox.AvailableDeviceAction.AvailableDeviceAction
    export interface AvailableDeviceAction {
        description: string;
        name: string;
    }
    //overTheBox.AvailableMigrationOffer
    // fullName: overTheBox.AvailableMigrationOffer.AvailableMigrationOffer
    export interface AvailableMigrationOffer {
        currentOfferPrice: orderPrice;
        description: string;
        engagementMonths: number;
        hardwareAvailable: boolean;
        offer: string;
        price: orderPrice;
    }
    //overTheBox.Backup
    // fullName: overTheBox.Backup.Backup
    export interface Backup {
        backupId: string;
        createdAt: string;
        deviceActionId?: string;
    }
    //overTheBox.Device
    // fullName: overTheBox.Device.Device
    export interface Device {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
        networkInterfaces: overTheBox.DeviceInterface[];
        publicIp: string;
        systemVersion: string;
        version: string;
    }
    //overTheBox.DeviceAction
    // fullName: overTheBox.DeviceAction.DeviceAction
    export interface DeviceAction {
        actionId: string;
        createdAt: string;
        details: string;
        name: string;
        status: overTheBox.ActionStatusEnum;
        todoDate: string;
        updatedAt: string;
    }
    //overTheBox.DeviceForRegistration
    // fullName: overTheBox.DeviceForRegistration.DeviceForRegistration
    export interface DeviceForRegistration {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
    }
    //overTheBox.DeviceInterface
    // fullName: overTheBox.DeviceInterface.DeviceInterface
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
    //overTheBox.GraphEndpoint
    // fullName: overTheBox.GraphEndpoint.GraphEndpoint
    export interface GraphEndpoint {
        host: string;
        readToken: string;
        readTokenID: string;
    }
    //overTheBox.MultipathStatusEnum
    export type MultipathStatusEnum = "backup" | "handover" | "master" | "off" | "on"
    //overTheBox.RemoteAccess
    // fullName: overTheBox.RemoteAccess.RemoteAccess
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
    //overTheBox.RemoteAccessConnectionInfos
    // fullName: overTheBox.RemoteAccessConnectionInfos.RemoteAccessConnectionInfos
    export interface RemoteAccessConnectionInfos {
        ip?: string;
        port?: number;
    }
    //overTheBox.RemoteAccessStatusEnum
    export type RemoteAccessStatusEnum = "active" | "creating" | "deleted" | "deleting" | "pendingValidation" | "toDelete"
    //overTheBox.RemoteAccessUserInfos
    // fullName: overTheBox.RemoteAccessUserInfos.RemoteAccessUserInfos
    export interface RemoteAccessUserInfos {
        ip: string;
        publicKey?: string;
        user: string;
    }
    //overTheBox.Service
    // fullName: overTheBox.Service.Service
    export interface Service {
        SOCKSProxyEnabled: boolean;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        releaseChannel: string;
        serviceName: string;
        status: overTheBox.ServiceStatusEnum;
        tunnelMode: overTheBox.TunnelModeEnum;
    }
    //overTheBox.ServiceStatusEnum
    export type ServiceStatusEnum = "active" | "creating" | "deleted" | "suspended" | "toCreate" | "toDelete"
    //overTheBox.Task
    // fullName: overTheBox.Task.Task
    export interface Task {
        name: string;
        status: overTheBox.TaskStatusEnum;
        taskId: string;
    }
    //overTheBox.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "todo"
    //overTheBox.TemporaryLogsLink
    // fullName: overTheBox.TemporaryLogsLink.TemporaryLogsLink
    export interface TemporaryLogsLink {
        expirationDate: string;
        url: string;
    }
    //overTheBox.TunnelModeEnum
    export type TunnelModeEnum = "glorytun" | "glorytun_hybrid" | "glorytun_mud"
}
export namespace price {
    export namespace OverTheBox {
        //price.OverTheBox.OfferEnum
        export type OfferEnum = "plus.v1"
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
// Apis harmony
// path /overTheBox
export interface OverTheBox{
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
    [keys: string]:{
        // DELETE /overTheBox/{serviceName}
        $delete(): Promise<void>;
        // GET /overTheBox/{serviceName}
        $get(): Promise<overTheBox.Service>;
        // PUT /overTheBox/{serviceName}
        $put(body?: {body: overTheBox.Service}): Promise<void>;
        availableReleaseChannels: {
            // GET /overTheBox/{serviceName}/availableReleaseChannels
            $get(): Promise<string[]>;
        }
        backups: {
            // GET /overTheBox/{serviceName}/backups
            $get(): Promise<string[]>;
            [keys: string]:{
                // GET /overTheBox/{serviceName}/backups/{backupId}
                $get(): Promise<overTheBox.Backup>;
            } | any
        }
        cancelResiliation: {
            // POST /overTheBox/{serviceName}/cancelResiliation
            $post(): Promise<void>;
        }
        changeContact: {
            // POST /overTheBox/{serviceName}/changeContact
            $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        device: {
            // DELETE /overTheBox/{serviceName}/device
            $delete(): Promise<void>;
            // GET /overTheBox/{serviceName}/device
            $get(): Promise<overTheBox.Device>;
            actions: {
                // GET /overTheBox/{serviceName}/device/actions
                $get(param?: {name?: string, status?: overTheBox.ActionStatusEnum}): Promise<string[]>;
                // POST /overTheBox/{serviceName}/device/actions
                $post(body?: {name: string}): Promise<overTheBox.DeviceAction>;
                [keys: string]:{
                    // GET /overTheBox/{serviceName}/device/actions/{actionId}
                    $get(): Promise<overTheBox.DeviceAction>;
                } | any
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
                $post(body?: {backupId: string}): Promise<overTheBox.DeviceAction[]>;
            }
        }
        linkDevice: {
            // POST /overTheBox/{serviceName}/linkDevice
            $post(body?: {deviceId: string}): Promise<void>;
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
            $post(body?: {allowedIp?: string, expirationDate?: string, exposedPort: number, publicKey?: string}): Promise<overTheBox.RemoteAccess>;
            [keys: string]:{
                // DELETE /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                $delete(): Promise<void>;
                // GET /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                $get(): Promise<overTheBox.RemoteAccess>;
                authorize: {
                    // POST /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize
                    $post(): Promise<void>;
                }
            } | any
        }
        serviceInfos: {
            // GET /overTheBox/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /overTheBox/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
        tasks: {
            // GET /overTheBox/{serviceName}/tasks
            $get(param?: {name?: string, status?: overTheBox.TaskStatusEnum}): Promise<string[]>;
            [keys: string]:{
                // GET /overTheBox/{serviceName}/tasks/{taskId}
                $get(): Promise<overTheBox.Task>;
            } | any
        }
    } | any
}
// Api
type PathsOverTheBoxGET = '/overTheBox' |
  '/overTheBox/availableOffers' |
  '/overTheBox/{serviceName}' |
  '/overTheBox/{serviceName}/availableReleaseChannels' |
  '/overTheBox/{serviceName}/backups' |
  '/overTheBox/{serviceName}/backups/{backupId}' |
  '/overTheBox/{serviceName}/device' |
  '/overTheBox/{serviceName}/device/actions' |
  '/overTheBox/{serviceName}/device/actions/{actionId}' |
  '/overTheBox/{serviceName}/device/availableActions' |
  '/overTheBox/{serviceName}/migration/offers' |
  '/overTheBox/{serviceName}/remoteAccesses' |
  '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}' |
  '/overTheBox/{serviceName}/serviceInfos' |
  '/overTheBox/{serviceName}/tasks' |
  '/overTheBox/{serviceName}/tasks/{taskId}';

type PathsOverTheBoxPUT = '/overTheBox/{serviceName}' |
  '/overTheBox/{serviceName}/serviceInfos';

type PathsOverTheBoxPOST = '/overTheBox/devices' |
  '/overTheBox/{serviceName}/cancelResiliation' |
  '/overTheBox/{serviceName}/changeContact' |
  '/overTheBox/{serviceName}/device/actions' |
  '/overTheBox/{serviceName}/device/backup' |
  '/overTheBox/{serviceName}/device/logs' |
  '/overTheBox/{serviceName}/device/restoreBackup' |
  '/overTheBox/{serviceName}/linkDevice' |
  '/overTheBox/{serviceName}/remoteAccesses' |
  '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize';

type PathsOverTheBoxDELETE = '/overTheBox/{serviceName}' |
  '/overTheBox/{serviceName}/device' |
  '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}';

export class ApiOverTheBox extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the OVERTHEBOX service
   * List available services
   */
  public get(path: '/overTheBox'): Promise<string[]>;
  /**
   * Service
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}', params: {serviceName: string}): Promise<overTheBox.Service>;
  /**
   * availableReleaseChannels operations
   * List available release channels for this service
   */
  public get(path: '/overTheBox/{serviceName}/availableReleaseChannels', params: {serviceName: string}): Promise<string[]>;
  /**
   * List the overTheBox.Backup objects
   * List of backups for this service
   */
  public get(path: '/overTheBox/{serviceName}/backups', params: {serviceName: string}): Promise<string[]>;
  /**
   * Backup
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/backups/{backupId}', params: {backupId: string, serviceName: string}): Promise<overTheBox.Backup>;
  /**
   * Device
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/device', params: {serviceName: string}): Promise<overTheBox.Device>;
  /**
   * List the overTheBox.DeviceAction objects
   * List of actions scheduled for this device
   */
  public get(path: '/overTheBox/{serviceName}/device/actions', params: {serviceName: string, name?: string, status?: overTheBox.ActionStatusEnum}): Promise<string[]>;
  /**
   * Device action
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/device/actions/{actionId}', params: {actionId: string, serviceName: string}): Promise<overTheBox.DeviceAction>;
  /**
   * availableActions operations
   * List the available device actions
   */
  public get(path: '/overTheBox/{serviceName}/device/availableActions', params: {serviceName: string}): Promise<overTheBox.AvailableDeviceAction[]>;
  /**
   * offers operations
   * List all available offers one can migrate to
   */
  public get(path: '/overTheBox/{serviceName}/migration/offers', params: {serviceName: string}): Promise<overTheBox.AvailableMigrationOffer[]>;
  /**
   * List the overTheBox.RemoteAccess objects
   * List of remote accesses for the service
   */
  public get(path: '/overTheBox/{serviceName}/remoteAccesses', params: {serviceName: string}): Promise<string[]>;
  /**
   * If authorized, a remote access will expose a port, allowing an access to the device remotely
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', params: {remoteAccessId: string, serviceName: string}): Promise<overTheBox.RemoteAccess>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the overTheBox.Task objects
   * List of tasks scheduled for this service
   */
  public get(path: '/overTheBox/{serviceName}/tasks', params: {serviceName: string, name?: string, status?: overTheBox.TaskStatusEnum}): Promise<string[]>;
  /**
   * Task
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: string}): Promise<overTheBox.Task>;
  /**
   * List the available offers for the new call
   * List the available offers for the new call
   */
  public get(path: '/overTheBox/availableOffers'): Promise<price.OverTheBox.OfferEnum[]>;
  public get(path: PathsOverTheBoxGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Service
   * Alter this object properties
   */
  public put(path: '/overTheBox/{serviceName}', params: {serviceName: string, SOCKSProxyEnabled?: boolean, customerDescription?: string, graphEndpoint?: overTheBox.GraphEndpoint, releaseChannel?: string, status?: overTheBox.ServiceStatusEnum, tunnelMode?: overTheBox.TunnelModeEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/overTheBox/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsOverTheBoxPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * cancelResiliation operations
   * Cancel the resiliation of the Service
   */
  public post(path: '/overTheBox/{serviceName}/cancelResiliation', params: {serviceName: string}): Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/overTheBox/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * List the overTheBox.DeviceAction objects
   * Create a device action on the device
   */
  public post(path: '/overTheBox/{serviceName}/device/actions', params: {serviceName: string, name: string}): Promise<overTheBox.DeviceAction>;
  /**
   * backup operations
   * Create an action to generate a backup
   */
  public post(path: '/overTheBox/{serviceName}/device/backup', params: {serviceName: string}): Promise<overTheBox.DeviceAction>;
  /**
   * logs operations
   * Generate a temporary url to retrieve device logs
   */
  public post(path: '/overTheBox/{serviceName}/device/logs', params: {serviceName: string}): Promise<overTheBox.TemporaryLogsLink>;
  /**
   * restoreBackup operations
   * Create a group of actions to restore a given backup
   */
  public post(path: '/overTheBox/{serviceName}/device/restoreBackup', params: {serviceName: string, backupId: string}): Promise<overTheBox.DeviceAction[]>;
  /**
   * linkDevice operations
   * Link a device to this service
   */
  public post(path: '/overTheBox/{serviceName}/linkDevice', params: {serviceName: string, deviceId: string}): Promise<void>;
  /**
   * List the overTheBox.RemoteAccess objects
   * Create a new remote access for the service
   */
  public post(path: '/overTheBox/{serviceName}/remoteAccesses', params: {serviceName: string, allowedIp?: string, expirationDate?: string, exposedPort: number, publicKey?: string}): Promise<overTheBox.RemoteAccess>;
  /**
   * authorize operations
   * Authorize the remote access
   */
  public post(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize', params: {remoteAccessId: string, serviceName: string}): Promise<void>;
  /**
   * Get the list of devices connected from the same IP address
   * Get the list of devices connected from the same IP address
   */
  public post(path: '/overTheBox/devices'): Promise<overTheBox.DeviceForRegistration[]>;
  public post(path: PathsOverTheBoxPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Service
   * Resiliate a service
   */
  public delete(path: '/overTheBox/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
   * Device
   * Unlink a device from a service
   */
  public delete(path: '/overTheBox/{serviceName}/device', params: {serviceName: string}): Promise<void>;
  /**
   * If authorized, a remote access will expose a port, allowing an access to the device remotely
   * Delete a remote access
   */
  public delete(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', params: {remoteAccessId: string, serviceName: string}): Promise<void>;
  public delete(path: PathsOverTheBoxDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
export default ApiOverTheBox;
type orderPrice = order.Price;

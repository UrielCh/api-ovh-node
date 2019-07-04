import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
}
export namespace overTheBox {
    //overTheBox.ActionStatusEnum
    export type ActionStatusEnum = "doing" | "done" | "error" | "todo"
    //overTheBox.AvailableDeviceAction
    // fullName: overTheBox.AvailableDeviceAction.AvailableDeviceAction
    export interface AvailableDeviceAction {
        description?: string;
        name?: string;
    }
    //overTheBox.AvailableMigrationOffer
    // fullName: overTheBox.AvailableMigrationOffer.AvailableMigrationOffer
    export interface AvailableMigrationOffer {
        currentOfferPrice?: OVH.order.Price;
        description?: string;
        engagementMonths?: number;
        hardwareAvailable?: boolean;
        offer?: string;
        price?: OVH.order.Price;
    }
    //overTheBox.Backup
    // fullName: overTheBox.Backup.Backup
    export interface Backup {
        backupId?: string;
        createdAt?: string;
        deviceActionId?: string;
    }
    //overTheBox.Device
    // fullName: overTheBox.Device.Device
    export interface Device {
        activated?: boolean;
        deviceId?: string;
        lastSeen?: string;
        networkInterfaces?: OVH.overTheBox.DeviceInterface[];
        publicIp?: string;
        systemVersion?: string;
        version?: string;
    }
    //overTheBox.DeviceAction
    // fullName: overTheBox.DeviceAction.DeviceAction
    export interface DeviceAction {
        actionId?: string;
        createdAt?: string;
        details?: string;
        name?: string;
        status?: OVH.overTheBox.ActionStatusEnum;
        todoDate?: string;
        updatedAt?: string;
    }
    //overTheBox.DeviceForRegistration
    // fullName: overTheBox.DeviceForRegistration.DeviceForRegistration
    export interface DeviceForRegistration {
        activated?: boolean;
        deviceId?: string;
        lastSeen?: string;
    }
    //overTheBox.DeviceInterface
    // fullName: overTheBox.DeviceInterface.DeviceInterface
    export interface DeviceInterface {
        device?: string;
        dnsServers?: string[];
        gateway?: string;
        ip?: string;
        multipathStatus?: OVH.overTheBox.MultipathStatusEnum;
        name?: string;
        netmask?: string;
        publicIp?: string;
    }
    //overTheBox.GraphEndpoint
    // fullName: overTheBox.GraphEndpoint.GraphEndpoint
    export interface GraphEndpoint {
        host?: string;
        readToken?: string;
        readTokenID?: string;
    }
    //overTheBox.MultipathStatusEnum
    export type MultipathStatusEnum = "backup" | "handover" | "master" | "off" | "on"
    //overTheBox.RemoteAccess
    // fullName: overTheBox.RemoteAccess.RemoteAccess
    export interface RemoteAccess {
        accepted?: boolean;
        askDate?: string;
        authorizedBy?: string;
        connectionInfos?: OVH.overTheBox.RemoteAccessConnectionInfos;
        expirationDate?: string;
        exposedPort?: number;
        remoteAccessId?: string;
        remoteUserInfos?: OVH.overTheBox.RemoteAccessUserInfos;
        status?: OVH.overTheBox.RemoteAccessStatusEnum;
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
        ip?: string;
        publicKey?: string;
        user?: string;
    }
    //overTheBox.Service
    // fullName: overTheBox.Service.Service
    export interface Service {
        SOCKSProxyEnabled?: boolean;
        customerDescription?: string;
        graphEndpoint?: OVH.overTheBox.GraphEndpoint;
        releaseChannel?: string;
        serviceName?: string;
        status?: OVH.overTheBox.ServiceStatusEnum;
        tunnelMode?: OVH.overTheBox.TunnelModeEnum;
    }
    //overTheBox.ServiceStatusEnum
    export type ServiceStatusEnum = "active" | "creating" | "deleted" | "suspended" | "toCreate" | "toDelete"
    //overTheBox.Task
    // fullName: overTheBox.Task.Task
    export interface Task {
        name?: string;
        status?: OVH.overTheBox.TaskStatusEnum;
        taskId?: string;
    }
    //overTheBox.TaskStatusEnum
    export type TaskStatusEnum = "doing" | "done" | "error" | "todo"
    //overTheBox.TemporaryLogsLink
    // fullName: overTheBox.TemporaryLogsLink.TemporaryLogsLink
    export interface TemporaryLogsLink {
        expirationDate?: string;
        url?: string;
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
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /overTheBox
export interface OverTheBox {
    // GET /overTheBox
    GET(): Promise<string[]>;
    devices:  {
        // POST /overTheBox/devices
        POST(): Promise<overTheBox.DeviceForRegistration[]>;
    }
    [keys: string]: {
        // GET /overTheBox/{serviceName}
        GET(): Promise<overTheBox.Service>;
        // PUT /overTheBox/{serviceName}
        PUT(body?: {body: overTheBox.Service}): Promise<void>;
        // DELETE /overTheBox/{serviceName}
        DELETE(): Promise<void>;
        serviceInfos:  {
            // GET /overTheBox/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /overTheBox/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        tasks:  {
            // GET /overTheBox/{serviceName}/tasks
            GET(param?: {name?: string, status?: overTheBox.TaskStatusEnum}): Promise<string[]>;
            [keys: string]: {
                // GET /overTheBox/{serviceName}/tasks/{taskId}
                GET(): Promise<overTheBox.Task>;
            } | any
        }
        remoteAccesses:  {
            // GET /overTheBox/{serviceName}/remoteAccesses
            GET(): Promise<string[]>;
            // POST /overTheBox/{serviceName}/remoteAccesses
            POST(body?: {exposedPort: number, expirationDate?: string, allowedIp?: string, publicKey?: string}): Promise<overTheBox.RemoteAccess>;
            [keys: string]: {
                // GET /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                GET(): Promise<overTheBox.RemoteAccess>;
                // DELETE /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                DELETE(): Promise<void>;
                authorize:  {
                    // POST /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize
                    POST(): Promise<void>;
                }
            } | any
        }
        migration:  {
            offers:  {
                // GET /overTheBox/{serviceName}/migration/offers
                GET(): Promise<overTheBox.AvailableMigrationOffer[]>;
            }
        }
        linkDevice:  {
            // POST /overTheBox/{serviceName}/linkDevice
            POST(body?: {deviceId: string}): Promise<void>;
        }
        cancelResiliation:  {
            // POST /overTheBox/{serviceName}/cancelResiliation
            POST(): Promise<void>;
        }
        backups:  {
            // GET /overTheBox/{serviceName}/backups
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /overTheBox/{serviceName}/backups/{backupId}
                GET(): Promise<overTheBox.Backup>;
            } | any
        }
        device:  {
            // GET /overTheBox/{serviceName}/device
            GET(): Promise<overTheBox.Device>;
            // DELETE /overTheBox/{serviceName}/device
            DELETE(): Promise<void>;
            restoreBackup:  {
                // POST /overTheBox/{serviceName}/device/restoreBackup
                POST(body?: {backupId: string}): Promise<overTheBox.DeviceAction[]>;
            }
            logs:  {
                // POST /overTheBox/{serviceName}/device/logs
                POST(): Promise<overTheBox.TemporaryLogsLink>;
            }
            availableActions:  {
                // GET /overTheBox/{serviceName}/device/availableActions
                GET(): Promise<overTheBox.AvailableDeviceAction[]>;
            }
            actions:  {
                // GET /overTheBox/{serviceName}/device/actions
                GET(param?: {status?: overTheBox.ActionStatusEnum, name?: string}): Promise<string[]>;
                // POST /overTheBox/{serviceName}/device/actions
                POST(body?: {name: string}): Promise<overTheBox.DeviceAction>;
                [keys: string]: {
                    // GET /overTheBox/{serviceName}/device/actions/{actionId}
                    GET(): Promise<overTheBox.DeviceAction>;
                } | any
            }
            backup:  {
                // POST /overTheBox/{serviceName}/device/backup
                POST(): Promise<overTheBox.DeviceAction>;
            }
        }
        availableReleaseChannels:  {
            // GET /overTheBox/{serviceName}/availableReleaseChannels
            GET(): Promise<string[]>;
        }
        changeContact:  {
            // POST /overTheBox/{serviceName}/changeContact
            POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
        }
    } | any
    availableOffers:  {
        // GET /overTheBox/availableOffers
        GET(): Promise<price.OverTheBox.OfferEnum[]>;
    }
}
// Api
type PathsOverTheBoxGET = '/overTheBox/{serviceName}/serviceInfos' |
  '/overTheBox/{serviceName}/tasks' |
  '/overTheBox/{serviceName}/tasks/{taskId}' |
  '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}' |
  '/overTheBox/{serviceName}/remoteAccesses' |
  '/overTheBox/{serviceName}/migration/offers' |
  '/overTheBox/{serviceName}' |
  '/overTheBox/{serviceName}/backups/{backupId}' |
  '/overTheBox/{serviceName}/backups' |
  '/overTheBox/{serviceName}/device' |
  '/overTheBox/{serviceName}/device/availableActions' |
  '/overTheBox/{serviceName}/device/actions/{actionId}' |
  '/overTheBox/{serviceName}/device/actions' |
  '/overTheBox/{serviceName}/availableReleaseChannels' |
  '/overTheBox' |
  '/overTheBox/availableOffers';

type PathsOverTheBoxPUT = '/overTheBox/{serviceName}/serviceInfos' |
  '/overTheBox/{serviceName}';

type PathsOverTheBoxPOST = '/overTheBox/devices' |
  '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize' |
  '/overTheBox/{serviceName}/remoteAccesses' |
  '/overTheBox/{serviceName}/linkDevice' |
  '/overTheBox/{serviceName}/cancelResiliation' |
  '/overTheBox/{serviceName}/device/restoreBackup' |
  '/overTheBox/{serviceName}/device/logs' |
  '/overTheBox/{serviceName}/device/actions' |
  '/overTheBox/{serviceName}/device/backup' |
  '/overTheBox/{serviceName}/changeContact';

type PathsOverTheBoxDELETE = '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}' |
  '/overTheBox/{serviceName}' |
  '/overTheBox/{serviceName}/device';

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
  public get(path: '/overTheBox/{serviceName}/backups/{backupId}', params: {serviceName: string, backupId: string}): Promise<overTheBox.Backup>;
  /**
   * Device
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/device', params: {serviceName: string}): Promise<overTheBox.Device>;
  /**
   * List the overTheBox.DeviceAction objects
   * List of actions scheduled for this device
   */
  public get(path: '/overTheBox/{serviceName}/device/actions', params: {serviceName: string, name?: string, status?: OVH.overTheBox.ActionStatusEnum}): Promise<string[]>;
  /**
   * Device action
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/device/actions/{actionId}', params: {serviceName: string, actionId: string}): Promise<overTheBox.DeviceAction>;
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
  public get(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', params: {serviceName: string, remoteAccessId: string}): Promise<overTheBox.RemoteAccess>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/overTheBox/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the overTheBox.Task objects
   * List of tasks scheduled for this service
   */
  public get(path: '/overTheBox/{serviceName}/tasks', params: {serviceName: string, name?: string, status?: OVH.overTheBox.TaskStatusEnum}): Promise<string[]>;
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
  public put(path: '/overTheBox/{serviceName}', params: {serviceName: string, SOCKSProxyEnabled?: boolean, customerDescription?: string, graphEndpoint?: OVH.overTheBox.GraphEndpoint, releaseChannel?: string, status?: OVH.overTheBox.ServiceStatusEnum, tunnelMode?: OVH.overTheBox.TunnelModeEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/overTheBox/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
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
  public post(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize', params: {serviceName: string, remoteAccessId: string}): Promise<void>;
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
  public delete(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', params: {serviceName: string, remoteAccessId: string}): Promise<void>;
  public delete(path: PathsOverTheBoxDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
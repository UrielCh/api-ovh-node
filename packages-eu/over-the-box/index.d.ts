import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /overTheBox Models
 */
export declare namespace order {
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export declare namespace overTheBox {
    type ActionStatusEnum = "doing" | "done" | "error" | "todo";
    interface AvailableDeviceAction {
        description: string;
        name: string;
    }
    interface AvailableMigrationOffer {
        currentOfferPrice: order.Price;
        description: string;
        engagementMonths: number;
        hardwareAvailable: boolean;
        offer: string;
        price: order.Price;
    }
    interface Backup {
        backupId: string;
        createdAt: string;
        deviceActionId?: string;
    }
    interface Device {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
        networkInterfaces: overTheBox.DeviceInterface[];
        publicIp: string;
        systemVersion: string;
        version: string;
    }
    interface DeviceAction {
        actionId: string;
        createdAt: string;
        details: string;
        name: string;
        status: overTheBox.ActionStatusEnum;
        todoDate: string;
        updatedAt: string;
    }
    interface DeviceForRegistration {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
    }
    interface DeviceInterface {
        device?: string;
        dnsServers?: string[];
        gateway?: string;
        ip?: string;
        multipathStatus: overTheBox.MultipathStatusEnum;
        name: string;
        netmask?: string;
        publicIp?: string;
    }
    interface GraphEndpoint {
        host: string;
        readToken: string;
        readTokenID: string;
    }
    type MultipathStatusEnum = "backup" | "handover" | "master" | "off" | "on";
    interface RemoteAccess {
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
    interface RemoteAccessConnectionInfos {
        ip?: string;
        port?: number;
    }
    type RemoteAccessStatusEnum = "active" | "creating" | "deleted" | "deleting" | "pendingValidation" | "toDelete";
    interface RemoteAccessUserInfos {
        ip: string;
        publicKey?: string;
        user: string;
    }
    interface Service {
        SOCKSProxyEnabled: boolean;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        releaseChannel: string;
        serviceName: string;
        status: overTheBox.ServiceStatusEnum;
        tunnelMode: overTheBox.TunnelModeEnum;
    }
    type ServiceStatusEnum = "active" | "creating" | "deleted" | "suspended" | "toCreate" | "toDelete";
    interface Task {
        name: string;
        status: overTheBox.TaskStatusEnum;
        taskId: string;
    }
    type TaskStatusEnum = "doing" | "done" | "error" | "todo";
    interface TemporaryLogsLink {
        expirationDate: string;
        url: string;
    }
    type TunnelModeEnum = "glorytun" | "glorytun_hybrid" | "glorytun_mud";
}
export declare namespace price {
    namespace OverTheBox {
        type OfferEnum = "plus.v1";
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
/**
 * END API /overTheBox Models
 */
export declare function proxyOverTheBox(ovhEngine: OvhRequestable): OverTheBox;
export default proxyOverTheBox;
/**
 * Api Proxy model
 */ export interface OverTheBox {
    $get(): Promise<string[]>;
    availableOffers: {
        $get(): Promise<price.OverTheBox.OfferEnum[]>;
    };
    devices: {
        $post(): Promise<overTheBox.DeviceForRegistration[]>;
    };
    $(serviceName: string): {
        $delete(): Promise<void>;
        $get(): Promise<overTheBox.Service>;
        $put(params?: {
            SOCKSProxyEnabled?: boolean;
            customerDescription?: string;
            graphEndpoint?: overTheBox.GraphEndpoint;
            releaseChannel?: string;
            serviceName?: string;
            status?: overTheBox.ServiceStatusEnum;
            tunnelMode?: overTheBox.TunnelModeEnum;
        }): Promise<void>;
        availableReleaseChannels: {
            $get(): Promise<string[]>;
        };
        backups: {
            $get(): Promise<string[]>;
            $(backupId: string): {
                $get(): Promise<overTheBox.Backup>;
            };
        };
        cancelResiliation: {
            $post(): Promise<void>;
        };
        changeContact: {
            $post(params?: {
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
            }): Promise<number[]>;
        };
        device: {
            $delete(): Promise<void>;
            $get(): Promise<overTheBox.Device>;
            actions: {
                $get(params?: {
                    name?: string;
                    status?: overTheBox.ActionStatusEnum;
                }): Promise<string[]>;
                $post(params: {
                    name: string;
                }): Promise<overTheBox.DeviceAction>;
                $(actionId: string): {
                    $get(): Promise<overTheBox.DeviceAction>;
                };
            };
            availableActions: {
                $get(): Promise<overTheBox.AvailableDeviceAction[]>;
            };
            backup: {
                $post(): Promise<overTheBox.DeviceAction>;
            };
            logs: {
                $post(): Promise<overTheBox.TemporaryLogsLink>;
            };
            restoreBackup: {
                $post(params: {
                    backupId: string;
                }): Promise<overTheBox.DeviceAction[]>;
            };
        };
        linkDevice: {
            $post(params: {
                deviceId: string;
            }): Promise<void>;
        };
        migration: {
            offers: {
                $get(): Promise<overTheBox.AvailableMigrationOffer[]>;
            };
        };
        remoteAccesses: {
            $get(): Promise<string[]>;
            $post(params: {
                allowedIp?: string;
                expirationDate?: string;
                exposedPort: number;
                publicKey?: string;
            }): Promise<overTheBox.RemoteAccess>;
            $(remoteAccessId: string): {
                $delete(): Promise<void>;
                $get(): Promise<overTheBox.RemoteAccess>;
                authorize: {
                    $post(): Promise<void>;
                };
            };
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
        tasks: {
            $get(params?: {
                name?: string;
                status?: overTheBox.TaskStatusEnum;
            }): Promise<string[]>;
            $(taskId: string): {
                $get(): Promise<overTheBox.Task>;
            };
        };
    };
    /**
     * Operations about the OVERTHEBOX service
     * List available services
     */
    get(path: '/overTheBox'): () => Promise<string[]>;
    /**
     * Service
     * Get this object properties
     */
    get(path: '/overTheBox/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<overTheBox.Service>;
    /**
     * availableReleaseChannels operations
     * List available release channels for this service
     */
    get(path: '/overTheBox/{serviceName}/availableReleaseChannels'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List the overTheBox.Backup objects
     * List of backups for this service
     */
    get(path: '/overTheBox/{serviceName}/backups'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Backup
     * Get this object properties
     */
    get(path: '/overTheBox/{serviceName}/backups/{backupId}'): (params: {
        backupId: string;
        serviceName: string;
    }) => Promise<overTheBox.Backup>;
    /**
     * Device
     * Get this object properties
     */
    get(path: '/overTheBox/{serviceName}/device'): (params: {
        serviceName: string;
    }) => Promise<overTheBox.Device>;
    /**
     * List the overTheBox.DeviceAction objects
     * List of actions scheduled for this device
     */
    get(path: '/overTheBox/{serviceName}/device/actions'): (params: {
        serviceName: string;
        name?: string;
        status?: overTheBox.ActionStatusEnum;
    }) => Promise<string[]>;
    /**
     * Device action
     * Get this object properties
     */
    get(path: '/overTheBox/{serviceName}/device/actions/{actionId}'): (params: {
        actionId: string;
        serviceName: string;
    }) => Promise<overTheBox.DeviceAction>;
    /**
     * availableActions operations
     * List the available device actions
     */
    get(path: '/overTheBox/{serviceName}/device/availableActions'): (params: {
        serviceName: string;
    }) => Promise<overTheBox.AvailableDeviceAction[]>;
    /**
     * offers operations
     * List all available offers one can migrate to
     */
    get(path: '/overTheBox/{serviceName}/migration/offers'): (params: {
        serviceName: string;
    }) => Promise<overTheBox.AvailableMigrationOffer[]>;
    /**
     * List the overTheBox.RemoteAccess objects
     * List of remote accesses for the service
     */
    get(path: '/overTheBox/{serviceName}/remoteAccesses'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * If authorized, a remote access will expose a port, allowing an access to the device remotely
     * Get this object properties
     */
    get(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}'): (params: {
        remoteAccessId: string;
        serviceName: string;
    }) => Promise<overTheBox.RemoteAccess>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/overTheBox/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the overTheBox.Task objects
     * List of tasks scheduled for this service
     */
    get(path: '/overTheBox/{serviceName}/tasks'): (params: {
        serviceName: string;
        name?: string;
        status?: overTheBox.TaskStatusEnum;
    }) => Promise<string[]>;
    /**
     * Task
     * Get this object properties
     */
    get(path: '/overTheBox/{serviceName}/tasks/{taskId}'): (params: {
        serviceName: string;
        taskId: string;
    }) => Promise<overTheBox.Task>;
    /**
     * List the available offers for the new call
     * List the available offers for the new call
     */
    get(path: '/overTheBox/availableOffers'): () => Promise<price.OverTheBox.OfferEnum[]>;
    /**
     * Service
     * Alter this object properties
     */
    put(path: '/overTheBox/{serviceName}'): (params: {
        serviceName: string;
        SOCKSProxyEnabled?: boolean;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        releaseChannel?: string;
        status?: overTheBox.ServiceStatusEnum;
        tunnelMode?: overTheBox.TunnelModeEnum;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/overTheBox/{serviceName}/serviceInfos'): (params: {
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
     * cancelResiliation operations
     * Cancel the resiliation of the Service
     */
    post(path: '/overTheBox/{serviceName}/cancelResiliation'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/overTheBox/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * List the overTheBox.DeviceAction objects
     * Create a device action on the device
     */
    post(path: '/overTheBox/{serviceName}/device/actions'): (params: {
        serviceName: string;
        name: string;
    }) => Promise<overTheBox.DeviceAction>;
    /**
     * backup operations
     * Create an action to generate a backup
     */
    post(path: '/overTheBox/{serviceName}/device/backup'): (params: {
        serviceName: string;
    }) => Promise<overTheBox.DeviceAction>;
    /**
     * logs operations
     * Generate a temporary url to retrieve device logs
     */
    post(path: '/overTheBox/{serviceName}/device/logs'): (params: {
        serviceName: string;
    }) => Promise<overTheBox.TemporaryLogsLink>;
    /**
     * restoreBackup operations
     * Create a group of actions to restore a given backup
     */
    post(path: '/overTheBox/{serviceName}/device/restoreBackup'): (params: {
        serviceName: string;
        backupId: string;
    }) => Promise<overTheBox.DeviceAction[]>;
    /**
     * linkDevice operations
     * Link a device to this service
     */
    post(path: '/overTheBox/{serviceName}/linkDevice'): (params: {
        serviceName: string;
        deviceId: string;
    }) => Promise<void>;
    /**
     * List the overTheBox.RemoteAccess objects
     * Create a new remote access for the service
     */
    post(path: '/overTheBox/{serviceName}/remoteAccesses'): (params: {
        serviceName: string;
        allowedIp?: string;
        expirationDate?: string;
        exposedPort: number;
        publicKey?: string;
    }) => Promise<overTheBox.RemoteAccess>;
    /**
     * authorize operations
     * Authorize the remote access
     */
    post(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize'): (params: {
        remoteAccessId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Get the list of devices connected from the same IP address
     * Get the list of devices connected from the same IP address
     */
    post(path: '/overTheBox/devices'): () => Promise<overTheBox.DeviceForRegistration[]>;
    /**
     * Service
     * Resiliate a service
     */
    delete(path: '/overTheBox/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * Device
     * Unlink a device from a service
     */
    delete(path: '/overTheBox/{serviceName}/device'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * If authorized, a remote access will expose a port, allowing an access to the device remotely
     * Delete a remote access
     */
    delete(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}'): (params: {
        remoteAccessId: string;
        serviceName: string;
    }) => Promise<void>;
}

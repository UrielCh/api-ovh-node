import { ApiCommon } from '@ovh-api/common';
/**
 * Status of the service.
 */
export type OverTheBoxServiceStatusEnum = 'active' | 'creating' | 'deleted' | 'suspended' | 'toCreate' | 'toDelete';
/**
 * Backup
 */
export interface OverTheBoxBackup {
  /**
   * Date of the creation of the backup
   *
   */
  createdAt?: Date;
  /**
   * The id of the backup
   *
   */
  backupId?: string;
  /**
   * The id of the device action that triggered the backup
   *
   */
  deviceActionId?: string;
}
/**
 * Service
 */
export interface OverTheBoxService {
  /**
   * Release channel of the service
   *
   */
  releaseChannel?: string;
  /**
   * If the socks proxy is enabled
   *
   */
  SOCKSProxyEnabled?: boolean;
  /**
   * The tunnel mode of the service
   *
   */
  tunnelMode?: OverTheBoxTunnelModeEnum;
  /**
   * Parameters needed to fetch metrics
   *
   */
  graphEndpoint?: OverTheBoxGraphEndpoint;
  /**
   * Editable field for customer
   *
   */
  customerDescription?: string;
  /**
   * The name of the service
   *
   */
  serviceName?: string;
  /**
   * The status of the service
   *
   */
  status?: OverTheBoxServiceStatusEnum;
}
/**
 * A device for registration
 */
export interface OverTheBoxDeviceForRegistration {
  /**
   * The last time this device was seen on the provisionning servers
   *
   */
  lastSeen?: Date;
  /**
   */
  deviceId?: string;
  /**
   * Whether or not this device is actived
   *
   */
  activated?: boolean;
}
/**
 * Temporary url informations
 */
export interface OverTheBoxTemporaryLogsLink {
  /**
   * Temporary url
   *
   */
  url?: string;
  /**
   * Temporary url expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Status of a task.
 */
export type OverTheBoxTaskStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  text?: string;
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  value?: Number;
}
/**
 * Status of a MPTCP Interface.
 */
export type OverTheBoxMultipathStatusEnum = 'backup' | 'handover' | 'master' | 'off' | 'on';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * All the infos needed to connect yourself to your OTB
 */
export interface OverTheBoxRemoteAccessConnectionInfos {
  /**
   * Port to connect to when accessing the device remotely
   *
   */
  port?: Number;
  /**
   * IP to connect to when accessing the device remotely
   *
   */
  ip?: string;
}
/**
 * Device
 */
export interface OverTheBoxDevice {
  /**
   * Network interfaces of the device
   *
   */
  networkInterfaces?: OverTheBoxDeviceInterface[];
  /**
   * Last time the device has been seen on the provisionning servers
   *
   */
  lastSeen?: Date;
  /**
   * The public IP of the device
   *
   */
  publicIp?: string;
  /**
   * The id of the device
   *
   */
  deviceId?: string;
  /**
   * Version of the device
   *
   */
  version?: string;
  /**
   * System version of the device
   *
   */
  systemVersion?: string;
  /**
   * Whether or not this device is associated to a service
   *
   */
  activated?: boolean;
}
/**
 * Task
 */
export interface OverTheBoxTask {
  /**
   * The name of the task
   *
   */
  name?: string;
  /**
   * The id of the task
   *
   */
  taskId?: string;
  /**
   * The status of the task
   *
   */
  status?: OverTheBoxTaskStatusEnum;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
}
/**
 * Status of a task.
 */
export type OverTheBoxActionStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Parameters required to query metrics from OpenTSDB
 */
export interface OverTheBoxGraphEndpoint {
  /**
   * The read-only token ID
   *
   */
  readTokenID?: string;
  /**
   * A read-only token
   *
   */
  readToken?: string;
  /**
   * The OpenTSDB host
   *
   */
  host?: string;
}
/**
 * Tunnel mode of the service.
 */
export type OverTheBoxTunnelModeEnum = 'glorytun' | 'glorytun_hybrid' | 'glorytun_mud';
/**
 * Infos about a network interface
 */
export interface OverTheBoxDeviceInterface {
  /**
   * Netmask of the interface
   *
   */
  netmask?: string;
  /**
   * IP of the interface
   *
   */
  ip?: string;
  /**
   * Name of the interface
   *
   */
  name?: string;
  /**
   * Public IP of the interface
   *
   */
  publicIp?: string;
  /**
   * The DNS servers of this interface
   *
   */
  dnsServers?: string[];
  /**
   * Device of the interface
   *
   */
  device?: string;
  /**
   * Gateway of the interface
   *
   */
  gateway?: string;
  /**
   * Status of MPTCP on this interface
   *
   */
  multipathStatus?: OverTheBoxMultipathStatusEnum;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Status of the remote access.
 */
export type OverTheBoxRemoteAccessStatusEnum = 'active' | 'creating' | 'deleted' | 'deleting' | 'pendingValidation' | 'toDelete';
/**
 * If authorized, a remote access will expose a port, allowing an access to the device remotely
 */
export interface OverTheBoxRemoteAccess {
  /**
   * All the infos needed to connect yourself to your OTB
   *
   */
  connectionInfos?: OverTheBoxRemoteAccessConnectionInfos;
  /**
   * Infos about the remote user
   *
   */
  remoteUserInfos?: OverTheBoxRemoteAccessUserInfos;
  /**
   * The user that authorized the remote access
   *
   */
  authorizedBy?: string;
  /**
   * The id of the remote access
   *
   */
  remoteAccessId?: string;
  /**
   * The device's port which will be exposed
   *
   */
  exposedPort?: Number;
  /**
   * If the remote access was accepted by the remote user
   *
   */
  accepted?: boolean;
  /**
   * The date of the remote access demand
   *
   */
  askDate?: Date;
  /**
   * Status of the remote access
   *
   */
  status?: OverTheBoxRemoteAccessStatusEnum;
  /**
   * When the remote access will be automatically deleted
   *
   */
  expirationDate?: Date;
}
/**
 * Device action
 */
export interface OverTheBoxDeviceAction {
  /**
   * Date of creation of the action
   *
   */
  createdAt?: Date;
  /**
   * The name of the action
   *
   */
  name?: string;
  /**
   * Date of execution of the action
   *
   */
  todoDate?: Date;
  /**
   * The id of the action
   *
   */
  actionId?: string;
  /**
   * The details of the action
   *
   */
  details?: string;
  /**
   * Last time the action was updated
   *
   */
  updatedAt?: Date;
  /**
   * The status of the action
   *
   */
  status?: OverTheBoxActionStatusEnum;
}
/**
 * Migration offer
 */
export interface OverTheBoxAvailableMigrationOffer {
  /**
   * Name of the offer
   *
   */
  offer?: string;
  /**
   * Monthly price of the new offer
   *
   */
  price?: OrderPrice;
  /**
   * Description of the offer
   *
   */
  description?: string;
  /**
   * Number of months of engagement
   *
   */
  engagementMonths?: Number;
  /**
   * Specify if a hardware is available
   *
   */
  hardwareAvailable?: boolean;
  /**
   * Monthly price of the current offer
   *
   */
  currentOfferPrice?: OrderPrice;
}
/**
 * Device action
 */
export interface OverTheBoxAvailableDeviceAction {
  /**
   * Name of the action
   *
   */
  name?: string;
  /**
   * Description of the action
   *
   */
  description?: string;
}
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
/**
 * Infos about the remote user
 */
export interface OverTheBoxRemoteAccessUserInfos {
  /**
   * IP from which the remote access will be allowed
   *
   */
  ip?: string;
  /**
   * The public key authorized on the device (for SSH purpose)
   *
   */
  publicKey?: string;
  /**
   * The user that will access the device remotely
   *
   */
  user?: string;
}
/**
 * Enum of Offers
 */
export type PriceOverTheBoxOfferEnum = 'plus.v1';
type PathsoverTheBoxGET = '/overTheBox/{serviceName}/device' | 
'/overTheBox/{serviceName}/device/availableActions' | 
'/overTheBox/{serviceName}/device/actions/{actionId}' | 
'/overTheBox/{serviceName}/device/actions' | 
'/overTheBox/{serviceName}/availableReleaseChannels' | 
'/overTheBox/{serviceName}/tasks/{taskId}' | 
'/overTheBox/{serviceName}/tasks' | 
'/overTheBox/{serviceName}/migration/offers' | 
'/overTheBox/{serviceName}/serviceInfos' | 
'/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}' | 
'/overTheBox/{serviceName}/remoteAccesses' | 
'/overTheBox/{serviceName}/backups' | 
'/overTheBox/{serviceName}/backups/{backupId}' | 
'/overTheBox/{serviceName}' | 
'/overTheBox' | 
'/overTheBox/availableOffers';

type PathsoverTheBoxPUT = '/overTheBox/{serviceName}/serviceInfos' | 
'/overTheBox/{serviceName}';

type PathsoverTheBoxPOST = '/overTheBox/devices' | 
'/overTheBox/{serviceName}/changeContact' | 
'/overTheBox/{serviceName}/device/restoreBackup' | 
'/overTheBox/{serviceName}/device/logs' | 
'/overTheBox/{serviceName}/device/backup' | 
'/overTheBox/{serviceName}/device/actions' | 
'/overTheBox/{serviceName}/linkDevice' | 
'/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize' | 
'/overTheBox/{serviceName}/remoteAccesses' | 
'/overTheBox/{serviceName}/cancelResiliation';

type PathsoverTheBoxDELETE = '/overTheBox/{serviceName}/device' | 
'/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}' | 
'/overTheBox/{serviceName}';

class ApioverTheBox extends ApiCommon {
  /**
  Device
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/device', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxDevice>;
  /**
  availableActions operations
  List the available device actions
  **/
  public get(path: '/overTheBox/{serviceName}/device/availableActions', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxAvailableDeviceAction[]>;
  /**
  Device action
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/device/actions/{actionId}', pathParams: {serviceName?: string, actionId?: string}, queryParams: null): Promise<OverTheBoxDeviceAction>;
  /**
  List the overTheBox.DeviceAction objects
  List of actions scheduled for this device
  **/
  public get(path: '/overTheBox/{serviceName}/device/actions', pathParams: {serviceName?: string}, queryParams: {status?: OverTheBoxActionStatusEnum, name?: string}): Promise<string[]>;
  /**
  availableReleaseChannels operations
  List available release channels for this service
  **/
  public get(path: '/overTheBox/{serviceName}/availableReleaseChannels', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Task
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: string}, queryParams: null): Promise<OverTheBoxTask>;
  /**
  List the overTheBox.Task objects
  List of tasks scheduled for this service
  **/
  public get(path: '/overTheBox/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {status?: OverTheBoxTaskStatusEnum, name?: string}): Promise<string[]>;
  /**
  offers operations
  List all available offers one can migrate to
  **/
  public get(path: '/overTheBox/{serviceName}/migration/offers', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxAvailableMigrationOffer[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  If authorized, a remote access will expose a port, allowing an access to the device remotely
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', pathParams: {serviceName?: string, remoteAccessId?: string}, queryParams: null): Promise<OverTheBoxRemoteAccess>;
  /**
  List the overTheBox.RemoteAccess objects
  List of remote accesses for the service
  **/
  public get(path: '/overTheBox/{serviceName}/remoteAccesses', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the overTheBox.Backup objects
  List of backups for this service
  **/
  public get(path: '/overTheBox/{serviceName}/backups', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Backup
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/backups/{backupId}', pathParams: {serviceName?: string, backupId?: string}, queryParams: null): Promise<OverTheBoxBackup>;
  /**
  Service
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxService>;
  /**
  Operations about the OVERTHEBOX service
  List available services
  **/
  public get(path: '/overTheBox', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the available offers for the new call
  List the available offers for the new call
  **/
  public get(path: '/overTheBox/availableOffers', pathParams: null, queryParams: null): Promise<PriceOverTheBoxOfferEnum[]>;
  public get(path: PathsoverTheBoxGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/overTheBox/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Service
  Alter this object properties
  **/
  public put(path: '/overTheBox/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsoverTheBoxPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Get the list of devices connected from the same IP address
  Get the list of devices connected from the same IP address
  **/
  public post(path: '/overTheBox/devices', pathParams: null, queryParams: null, bodyParams: null): Promise<OverTheBoxDeviceForRegistration[]>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/overTheBox/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  restoreBackup operations
  Create a group of actions to restore a given backup
  **/
  public post(path: '/overTheBox/{serviceName}/device/restoreBackup', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<OverTheBoxDeviceAction[]>;
  /**
  logs operations
  Generate a temporary url to retrieve device logs
  **/
  public post(path: '/overTheBox/{serviceName}/device/logs', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<OverTheBoxTemporaryLogsLink>;
  /**
  backup operations
  Create an action to generate a backup
  **/
  public post(path: '/overTheBox/{serviceName}/device/backup', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<OverTheBoxDeviceAction>;
  /**
  List the overTheBox.DeviceAction objects
  Create a device action on the device
  **/
  public post(path: '/overTheBox/{serviceName}/device/actions', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<OverTheBoxDeviceAction>;
  /**
  linkDevice operations
  Link a device to this service
  **/
  public post(path: '/overTheBox/{serviceName}/linkDevice', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  authorize operations
  Authorize the remote access
  **/
  public post(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize', pathParams: {serviceName?: string, remoteAccessId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  List the overTheBox.RemoteAccess objects
  Create a new remote access for the service
  **/
  public post(path: '/overTheBox/{serviceName}/remoteAccesses', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<OverTheBoxRemoteAccess>;
  /**
  cancelResiliation operations
  Cancel the resiliation of the Service
  **/
  public post(path: '/overTheBox/{serviceName}/cancelResiliation', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public post(path: PathsoverTheBoxPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Device
  Unlink a device from a service
  **/
  public delete(path: '/overTheBox/{serviceName}/device', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  If authorized, a remote access will expose a port, allowing an access to the device remotely
  Delete a remote access
  **/
  public delete(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', pathParams: {serviceName?: string, remoteAccessId?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Service
  Resiliate a service
  **/
  public delete(path: '/overTheBox/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public delete(path: PathsoverTheBoxDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

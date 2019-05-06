import { ApiCommon } from '@ovh-api/common';
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
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
 * Status of a task.
 */
export type OverTheBoxActionStatusEnum = 'doing' | 'done' | 'error' | 'todo';
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
   * System version of the device
   *
   */
  systemVersion?: string;
  /**
   * Version of the device
   *
   */
  version?: string;
  /**
   * The id of the device
   *
   */
  deviceId?: string;
  /**
   * Whether or not this device is associated to a service
   *
   */
  activated?: boolean;
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
 * Status of a MPTCP Interface.
 */
export type OverTheBoxMultipathStatusEnum = 'backup' | 'handover' | 'master' | 'off' | 'on';
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
   * When the remote access will be automatically deleted
   *
   */
  expirationDate?: Date;
  /**
   * Status of the remote access
   *
   */
  status?: OverTheBoxRemoteAccessStatusEnum;
}
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
 * Status of the remote access.
 */
export type OverTheBoxRemoteAccessStatusEnum = 'active' | 'creating' | 'deleted' | 'deleting' | 'pendingValidation' | 'toDelete';
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
 * Status of the service.
 */
export type OverTheBoxServiceStatusEnum = 'active' | 'creating' | 'deleted' | 'suspended' | 'toCreate' | 'toDelete';
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
 * Status of a task.
 */
export type OverTheBoxTaskStatusEnum = 'doing' | 'done' | 'error' | 'todo';
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
 * Tunnel mode of the service.
 */
export type OverTheBoxTunnelModeEnum = 'glorytun' | 'glorytun_hybrid' | 'glorytun_mud';
/**
 * Enum of Offers
 */
export type PriceOverTheBoxOfferEnum = 'plus.v1';
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
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsoverTheBoxGET = '/overTheBox' | 
'/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}' | 
'/overTheBox/{serviceName}/remoteAccesses' | 
'/overTheBox/{serviceName}/migration/offers' | 
'/overTheBox/{serviceName}/backups/{backupId}' | 
'/overTheBox/{serviceName}/backups' | 
'/overTheBox/{serviceName}/availableReleaseChannels' | 
'/overTheBox/{serviceName}/serviceInfos' | 
'/overTheBox/{serviceName}' | 
'/overTheBox/{serviceName}/tasks/{taskId}' | 
'/overTheBox/{serviceName}/tasks' | 
'/overTheBox/{serviceName}/device/availableActions' | 
'/overTheBox/{serviceName}/device' | 
'/overTheBox/{serviceName}/device/actions' | 
'/overTheBox/{serviceName}/device/actions/{actionId}' | 
'/overTheBox/availableOffers';

type PathsoverTheBoxPUT = '/overTheBox/{serviceName}/serviceInfos' | 
'/overTheBox/{serviceName}';

type PathsoverTheBoxPOST = '/overTheBox/devices' | 
'/overTheBox/{serviceName}/changeContact' | 
'/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize' | 
'/overTheBox/{serviceName}/remoteAccesses' | 
'/overTheBox/{serviceName}/linkDevice' | 
'/overTheBox/{serviceName}/cancelResiliation' | 
'/overTheBox/{serviceName}/device/logs' | 
'/overTheBox/{serviceName}/device/backup' | 
'/overTheBox/{serviceName}/device/restoreBackup' | 
'/overTheBox/{serviceName}/device/actions';

type PathsoverTheBoxDELETE = '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}' | 
'/overTheBox/{serviceName}' | 
'/overTheBox/{serviceName}/device';

class ApioverTheBox extends ApiCommon {
  /**
  Operations about the OVERTHEBOX service
  List available services
  **/
  public get(path: '/overTheBox', pathParams: null, queryParams: null): Promise<string[]>;
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
  offers operations
  List all available offers one can migrate to
  **/
  public get(path: '/overTheBox/{serviceName}/migration/offers', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxAvailableMigrationOffer[]>;
  /**
  Backup
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/backups/{backupId}', pathParams: {serviceName?: string, backupId?: string}, queryParams: null): Promise<OverTheBoxBackup>;
  /**
  List the overTheBox.Backup objects
  List of backups for this service
  **/
  public get(path: '/overTheBox/{serviceName}/backups', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  availableReleaseChannels operations
  List available release channels for this service
  **/
  public get(path: '/overTheBox/{serviceName}/availableReleaseChannels', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Service
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxService>;
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
  availableActions operations
  List the available device actions
  **/
  public get(path: '/overTheBox/{serviceName}/device/availableActions', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxAvailableDeviceAction[]>;
  /**
  Device
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/device', pathParams: {serviceName?: string}, queryParams: null): Promise<OverTheBoxDevice>;
  /**
  List the overTheBox.DeviceAction objects
  List of actions scheduled for this device
  **/
  public get(path: '/overTheBox/{serviceName}/device/actions', pathParams: {serviceName?: string}, queryParams: {status?: OverTheBoxActionStatusEnum, name?: string}): Promise<string[]>;
  /**
  Device action
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/device/actions/{actionId}', pathParams: {serviceName?: string, actionId?: string}, queryParams: null): Promise<OverTheBoxDeviceAction>;
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
  public put(path: '/overTheBox/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Service
  Alter this object properties
  **/
  public put(path: '/overTheBox/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsoverTheBoxPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Get the list of devices connected from the same IP address
  Get the list of devices connected from the same IP address
  **/
  public post(path: '/overTheBox/devices', pathParams: null, bodyParams: null): Promise<OverTheBoxDeviceForRegistration[]>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/overTheBox/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  authorize operations
  Authorize the remote access
  **/
  public post(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize', pathParams: {serviceName?: string, remoteAccessId?: string}, bodyParams: null): Promise<void>;
  /**
  List the overTheBox.RemoteAccess objects
  Create a new remote access for the service
  **/
  public post(path: '/overTheBox/{serviceName}/remoteAccesses', pathParams: {serviceName?: string}, bodyParams: null): Promise<OverTheBoxRemoteAccess>;
  /**
  linkDevice operations
  Link a device to this service
  **/
  public post(path: '/overTheBox/{serviceName}/linkDevice', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  cancelResiliation operations
  Cancel the resiliation of the Service
  **/
  public post(path: '/overTheBox/{serviceName}/cancelResiliation', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  logs operations
  Generate a temporary url to retrieve device logs
  **/
  public post(path: '/overTheBox/{serviceName}/device/logs', pathParams: {serviceName?: string}, bodyParams: null): Promise<OverTheBoxTemporaryLogsLink>;
  /**
  backup operations
  Create an action to generate a backup
  **/
  public post(path: '/overTheBox/{serviceName}/device/backup', pathParams: {serviceName?: string}, bodyParams: null): Promise<OverTheBoxDeviceAction>;
  /**
  restoreBackup operations
  Create a group of actions to restore a given backup
  **/
  public post(path: '/overTheBox/{serviceName}/device/restoreBackup', pathParams: {serviceName?: string}, bodyParams: null): Promise<OverTheBoxDeviceAction[]>;
  /**
  List the overTheBox.DeviceAction objects
  Create a device action on the device
  **/
  public post(path: '/overTheBox/{serviceName}/device/actions', pathParams: {serviceName?: string}, bodyParams: null): Promise<OverTheBoxDeviceAction>;
  public post(path: PathsoverTheBoxPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  If authorized, a remote access will expose a port, allowing an access to the device remotely
  Delete a remote access
  **/
  public delete(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', pathParams: {serviceName?: string, remoteAccessId?: string}, bodyParams: null): Promise<void>;
  /**
  Service
  Resiliate a service
  **/
  public delete(path: '/overTheBox/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Device
  Unlink a device from a service
  **/
  public delete(path: '/overTheBox/{serviceName}/device', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public delete(path: PathsoverTheBoxDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

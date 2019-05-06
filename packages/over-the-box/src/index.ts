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
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  text?: string;
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
   * Description of the action
   *
   */
  description?: string;
  /**
   * Name of the action
   *
   */
  name?: string;
}
/**
 * Migration offer
 */
export interface OverTheBoxAvailableMigrationOffer {
  /**
   * Monthly price of the current offer
   *
   */
  currentOfferPrice?: OrderPrice;
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
   * Name of the offer
   *
   */
  offer?: string;
  /**
   * Monthly price of the new offer
   *
   */
  price?: OrderPrice;
}
/**
 * Backup
 */
export interface OverTheBoxBackup {
  /**
   * The id of the backup
   *
   */
  backupId?: string;
  /**
   * Date of the creation of the backup
   *
   */
  createdAt?: string;
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
   * Whether or not this device is associated to a service
   *
   */
  activated?: boolean;
  /**
   * The id of the device
   *
   */
  deviceId?: string;
  /**
   * Last time the device has been seen on the provisionning servers
   *
   */
  lastSeen?: string;
  /**
   * Network interfaces of the device
   *
   */
  networkInterfaces?: OverTheBoxDeviceInterface[];
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
}
/**
 * Device action
 */
export interface OverTheBoxDeviceAction {
  /**
   * The id of the action
   *
   */
  actionId?: string;
  /**
   * Date of creation of the action
   *
   */
  createdAt?: string;
  /**
   * The details of the action
   *
   */
  details?: string;
  /**
   * The name of the action
   *
   */
  name?: string;
  /**
   * The status of the action
   *
   */
  status?: OverTheBoxActionStatusEnum;
  /**
   * Date of execution of the action
   *
   */
  todoDate?: string;
  /**
   * Last time the action was updated
   *
   */
  updatedAt?: string;
}
/**
 * A device for registration
 */
export interface OverTheBoxDeviceForRegistration {
  /**
   * Whether or not this device is actived
   *
   */
  activated?: boolean;
  /**
   */
  deviceId?: string;
  /**
   * The last time this device was seen on the provisionning servers
   *
   */
  lastSeen?: string;
}
/**
 * Infos about a network interface
 */
export interface OverTheBoxDeviceInterface {
  /**
   * Device of the interface
   *
   */
  device?: string;
  /**
   * The DNS servers of this interface
   *
   */
  dnsServers?: string[];
  /**
   * Gateway of the interface
   *
   */
  gateway?: string;
  /**
   * IP of the interface
   *
   */
  ip?: string;
  /**
   * Status of MPTCP on this interface
   *
   */
  multipathStatus?: OverTheBoxMultipathStatusEnum;
  /**
   * Name of the interface
   *
   */
  name?: string;
  /**
   * Netmask of the interface
   *
   */
  netmask?: string;
  /**
   * Public IP of the interface
   *
   */
  publicIp?: string;
}
/**
 * Parameters required to query metrics from OpenTSDB
 */
export interface OverTheBoxGraphEndpoint {
  /**
   * The OpenTSDB host
   *
   */
  host?: string;
  /**
   * A read-only token
   *
   */
  readToken?: string;
  /**
   * The read-only token ID
   *
   */
  readTokenID?: string;
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
   * If the remote access was accepted by the remote user
   *
   */
  accepted?: boolean;
  /**
   * The date of the remote access demand
   *
   */
  askDate?: string;
  /**
   * The user that authorized the remote access
   *
   */
  authorizedBy?: string;
  /**
   * All the infos needed to connect yourself to your OTB
   *
   */
  connectionInfos?: OverTheBoxRemoteAccessConnectionInfos;
  /**
   * When the remote access will be automatically deleted
   *
   */
  expirationDate?: string;
  /**
   * The device's port which will be exposed
   *
   */
  exposedPort?: Number;
  /**
   * The id of the remote access
   *
   */
  remoteAccessId?: string;
  /**
   * Infos about the remote user
   *
   */
  remoteUserInfos?: OverTheBoxRemoteAccessUserInfos;
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
   * IP to connect to when accessing the device remotely
   *
   */
  ip?: string;
  /**
   * Port to connect to when accessing the device remotely
   *
   */
  port?: Number;
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
   * If the socks proxy is enabled
   *
   */
  SOCKSProxyEnabled?: boolean;
  /**
   * Editable field for customer
   *
   */
  customerDescription?: string;
  /**
   * Parameters needed to fetch metrics
   *
   */
  graphEndpoint?: OverTheBoxGraphEndpoint;
  /**
   * Release channel of the service
   *
   */
  releaseChannel?: string;
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
  /**
   * The tunnel mode of the service
   *
   */
  tunnelMode?: OverTheBoxTunnelModeEnum;
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
   * The status of the task
   *
   */
  status?: OverTheBoxTaskStatusEnum;
  /**
   * The id of the task
   *
   */
  taskId?: string;
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
   * Temporary url expiration date
   *
   */
  expirationDate?: string;
  /**
   * Temporary url
   *
   */
  url?: string;
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
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
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
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
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

export class ApiOverTheBox extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Task
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/tasks/{taskId}', pathParams: {serviceName: string, taskId: string}): Promise<OverTheBoxTask>;
  /**
  List the overTheBox.Task objects
  List of tasks scheduled for this service
  **/
  public get(path: '/overTheBox/{serviceName}/tasks', pathParams: {serviceName: string}, queryParams: {name?: string, status?: OverTheBoxTaskStatusEnum}): Promise<string[]>;
  /**
  If authorized, a remote access will expose a port, allowing an access to the device remotely
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', pathParams: {serviceName: string, remoteAccessId: string}): Promise<OverTheBoxRemoteAccess>;
  /**
  List the overTheBox.RemoteAccess objects
  List of remote accesses for the service
  **/
  public get(path: '/overTheBox/{serviceName}/remoteAccesses', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  availableReleaseChannels operations
  List available release channels for this service
  **/
  public get(path: '/overTheBox/{serviceName}/availableReleaseChannels', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Backup
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/backups/{backupId}', pathParams: {serviceName: string, backupId: string}): Promise<OverTheBoxBackup>;
  /**
  List the overTheBox.Backup objects
  List of backups for this service
  **/
  public get(path: '/overTheBox/{serviceName}/backups', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  offers operations
  List all available offers one can migrate to
  **/
  public get(path: '/overTheBox/{serviceName}/migration/offers', pathParams: {serviceName: string}): Promise<OverTheBoxAvailableMigrationOffer[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the overTheBox.DeviceAction objects
  List of actions scheduled for this device
  **/
  public get(path: '/overTheBox/{serviceName}/device/actions', pathParams: {serviceName: string}, queryParams: {name?: string, status?: OverTheBoxActionStatusEnum}): Promise<string[]>;
  /**
  Device action
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/device/actions/{actionId}', pathParams: {serviceName: string, actionId: string}): Promise<OverTheBoxDeviceAction>;
  /**
  availableActions operations
  List the available device actions
  **/
  public get(path: '/overTheBox/{serviceName}/device/availableActions', pathParams: {serviceName: string}): Promise<OverTheBoxAvailableDeviceAction[]>;
  /**
  Device
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}/device', pathParams: {serviceName: string}): Promise<OverTheBoxDevice>;
  /**
  Service
  Get this object properties
  **/
  public get(path: '/overTheBox/{serviceName}', pathParams: {serviceName: string}): Promise<OverTheBoxService>;
  /**
  List the available offers for the new call
  List the available offers for the new call
  **/
  public get(path: '/overTheBox/availableOffers'): Promise<PriceOverTheBoxOfferEnum[]>;
  /**
  Operations about the OVERTHEBOX service
  List available services
  **/
  public get(path: '/overTheBox'): Promise<string[]>;
  public get(path: PathsOverTheBoxGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/overTheBox/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Service
  Alter this object properties
  **/
  public put(path: '/overTheBox/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsOverTheBoxPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Get the list of devices connected from the same IP address
  Get the list of devices connected from the same IP address
  **/
  public post(path: '/overTheBox/devices'): Promise<OverTheBoxDeviceForRegistration[]>;
  /**
  authorize operations
  Authorize the remote access
  **/
  public post(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize', pathParams: {serviceName: string, remoteAccessId: string}): Promise<void>;
  /**
  List the overTheBox.RemoteAccess objects
  Create a new remote access for the service
  **/
  public post(path: '/overTheBox/{serviceName}/remoteAccesses', pathParams: {serviceName: string}): Promise<OverTheBoxRemoteAccess>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/overTheBox/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  cancelResiliation operations
  Cancel the resiliation of the Service
  **/
  public post(path: '/overTheBox/{serviceName}/cancelResiliation', pathParams: {serviceName: string}): Promise<void>;
  /**
  restoreBackup operations
  Create a group of actions to restore a given backup
  **/
  public post(path: '/overTheBox/{serviceName}/device/restoreBackup', pathParams: {serviceName: string}): Promise<OverTheBoxDeviceAction[]>;
  /**
  List the overTheBox.DeviceAction objects
  Create a device action on the device
  **/
  public post(path: '/overTheBox/{serviceName}/device/actions', pathParams: {serviceName: string}): Promise<OverTheBoxDeviceAction>;
  /**
  backup operations
  Create an action to generate a backup
  **/
  public post(path: '/overTheBox/{serviceName}/device/backup', pathParams: {serviceName: string}): Promise<OverTheBoxDeviceAction>;
  /**
  logs operations
  Generate a temporary url to retrieve device logs
  **/
  public post(path: '/overTheBox/{serviceName}/device/logs', pathParams: {serviceName: string}): Promise<OverTheBoxTemporaryLogsLink>;
  /**
  linkDevice operations
  Link a device to this service
  **/
  public post(path: '/overTheBox/{serviceName}/linkDevice', pathParams: {serviceName: string}): Promise<void>;
  public post(path: PathsOverTheBoxPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  If authorized, a remote access will expose a port, allowing an access to the device remotely
  Delete a remote access
  **/
  public delete(path: '/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}', pathParams: {serviceName: string, remoteAccessId: string}): Promise<void>;
  /**
  Device
  Unlink a device from a service
  **/
  public delete(path: '/overTheBox/{serviceName}/device', pathParams: {serviceName: string}): Promise<void>;
  /**
  Service
  Resiliate a service
  **/
  public delete(path: '/overTheBox/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  public delete(path: PathsOverTheBoxDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
/**
 * A structure describing informations for APC orderable for this housing bay
 */
export interface DedicatedHousingApcOrderable {
  /**
   * Is an APC is orderable for this housing bay
   *
   */
  orderable?: boolean;
  /**
   * Is this APC free
   *
   */
  free?: boolean;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * A structure describing the Bay's network configuration
 */
export interface DedicatedHousingIpInfo {
  /**
   * Reserved addresses. You should not use them in your network
   *
   */
  reservedAddresses?: string[];
  /**
   * Network gateway of the bay
   *
   */
  gateway?: string;
  /**
   * Network address of the bay
   *
   */
  network?: string;
}
/**
 * Housing bay
 */
export interface DedicatedHousingHousing {
  /**
   * The bay's description
   *
   */
  rack?: string;
  /**
   * The name you give to the bay
   *
   */
  name?: string;
  /**
   * Housing bay options
   *
   */
  options?: DedicatedHousingOptions;
  /**
   * Bay Security code
   *
   */
  securityCode?: string;
  /**
   * Housing bay datacenter
   *
   */
  datacenter?: DedicatedHousingDatacenterEnum;
  /**
   * Housing bay network
   *
   */
  network?: DedicatedHousingNetworkInfo[];
}
/**
 * A structure describing the Bay`s link information
 */
export interface DedicatedHousingLinkInfo {
  /**
   * Router in charge of your network
   *
   */
  router?: string;
  /**
   * Router port number
   *
   */
  port?: string;
}
/**
 * Backup Ftp assigned to this server
 */
export interface DedicatedServerBackupFtp {
  /**
   * If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded
   *
   */
  readOnlyDate?: Date;
  /**
   * The disk space currently used on your backup FTP in percent
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
  /**
   * The disk space available in gigabytes
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * The backup FTP server name
   *
   */
  ftpBackupName?: string;
  /**
   * The backup FTP type
   *
   */
  type?: DedicatedServerBackupStorageTypeEnum;
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
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
 * Distincts task
 */
export type DedicatedHousingTaskFunctionEnum = 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'changePasswordBackupFTP' | 'createBackupFTP' | 'migrateBackupFTP' | 'removeBackupFTP';
/**
 * different task operation
 */
export type DedicatedTaskFunctionEnum = 'addVirtualMac' | 'addWindowSplaFromExistingSerial' | 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'bypassAntiDDosGame' | 'changePasswordBackupFTP' | 'changeRipeOrg' | 'checkAndReleaseIp' | 'createBackupFTP' | 'createOrUpdateRipeOrg' | 'createPrivateNetwork' | 'disableFirewall' | 'enableFirewall' | 'genericMoveFloatingIp' | 'hardReboot' | 'migrateBackupFTP' | 'moveFloatingIp' | 'moveVirtualMac' | 'rebootPower8To' | 'reinstallServer' | 'releaseIp' | 'removeBackupFTP' | 'removeVirtualMac' | 'requestAccessIPMI' | 'resetIPMI' | 'resetIPMISession' | 'testIPMIhttp' | 'testIPMIpassword' | 'testIPMIping' | 'virtualMacAdd' | 'virtualMacDelete';
/**
 * A structure describing informations for High Availability routing service orderable for this housing bay
 */
export interface DedicatedHousingHaRoutingOrderable {
  /**
   * High Availability routing service offers
   *
   */
  offer?: DedicatedHousingHaRoutingOfferEnum[];
  /**
   * Is a routing service is orderable for this housing bay
   *
   */
  orderable?: boolean;
}
/**
 * Server tasks
 */
export interface DedicatedServerTask {
  /**
   * Function name
   *
   */
  function?: DedicatedTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: Date;
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: Date;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
}
/**
 * Different backup storage type
 */
export type DedicatedServerBackupStorageTypeEnum = 'included' | 'storage';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
/**
 * A structure describing the Bay`s network configuration
 */
export interface DedicatedHousingNetworkInfo {
  /**
   * IPv4 network information
   *
   */
  ipv4?: DedicatedHousingIpInfo;
  /**
   * IPv6 network information
   *
   */
  ipv6?: DedicatedHousingIpInfo;
  /**
   * Router related information
   *
   */
  link?: DedicatedHousingLinkInfo;
}
/**
 * Housing bay High Availablility offers
 */
export type DedicatedHousingHaRoutingOfferEnum = 'ha2x2' | 'ha2x4';
/**
 * Housing tasks
 */
export interface DedicatedHousingTask {
  /**
   * last update
   *
   */
  lastUpdate?: Date;
  /**
   * Function name
   *
   */
  function?: DedicatedHousingTaskFunctionEnum;
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: Date;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
}
/**
 * A structure describing current housing options
 */
export interface DedicatedHousingOptions {
  /**
   * Is this housing bay have handsneyes service
   *
   */
  handsneyes?: boolean;
  /**
   * Number of APC connected to this housing bay
   *
   */
  apcCount?: Number;
  /**
   * High Availability routing service offer
   *
   */
  highAvailabilityRouting?: string;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedServerBackupFtpAcl {
  /**
   * Wether to allow the FTP protocol for this ACL
   *
   */
  ftp?: boolean;
  /**
   * The IP Block specific to this ACL
   *
   */
  ipBlock?: string;
  /**
   * Date of the last object modification
   *
   */
  lastUpdate?: Date;
  /**
   * Whether the rule has been applied on the Backup Ftp
   *
   */
  isApplied?: boolean;
  /**
   * Wether to allow the NFS protocol for this ACL
   *
   */
  nfs?: boolean;
  /**
   * Wether to allow the CIFS (SMB) protocol for this ACL
   *
   */
  cifs?: boolean;
}
/**
 * Housing bay datacenters
 */
export type DedicatedHousingDatacenterEnum = 'gsw' | 'pdc1';
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
type PathsdedicatedhousingGET = '/dedicated/housing' | 
'/dedicated/housing/{serviceName}' | 
'/dedicated/housing/{serviceName}/task' | 
'/dedicated/housing/{serviceName}/task/{taskId}' | 
'/dedicated/housing/{serviceName}/serviceInfos' | 
'/dedicated/housing/{serviceName}/features/backupFTP' | 
'/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/housing/{serviceName}/orderable/APC';

type PathsdedicatedhousingPUT = '/dedicated/housing/{serviceName}/serviceInfos' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}';

type PathsdedicatedhousingPOST = '/dedicated/housing/{serviceName}/task/{taskId}/cancel' | 
'/dedicated/housing/{serviceName}/features/backupFTP' | 
'/dedicated/housing/{serviceName}/features/backupFTP/password' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access';

type PathsdedicatedhousingDELETE = '/dedicated/housing/{serviceName}/features/backupFTP' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}';

class Apidedicatedhousing extends ApiCommon {
  /**
  Operations about the HOUSING service
  List available services
  **/
  public get(path: '/dedicated/housing', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Housing bay
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedHousingHousing>;
  /**
  List the dedicated.housing.Task objects
  View task list
  **/
  public get(path: '/dedicated/housing/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {status?: DedicatedTaskStatusEnum, function?: DedicatedHousingTaskFunctionEnum}): Promise<Number[]>;
  /**
  Housing tasks
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<DedicatedHousingTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Backup Ftp assigned to this server
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedServerBackupFtp>;
  /**
  authorizableBlocks operations
  Get all IP blocks that can be used in the ACL
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, queryParams: null): Promise<DedicatedServerBackupFtpAcl>;
  /**
  APC operations
  Is an APC orderable for this housing bay
  **/
  public get(path: '/dedicated/housing/{serviceName}/orderable/APC', pathParams: {serviceName?: string}, queryParams: null): Promise<DedicatedHousingApcOrderable>;
  public get(path: PathsdedicatedhousingGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/housing/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Alter this object properties
  **/
  public put(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsdedicatedhousingPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  cancel operations
  this action stop the task progression if it's possible
  **/
  public post(path: '/dedicated/housing/{serviceName}/task/{taskId}/cancel', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Backup Ftp assigned to this server
  Create a new Backup FTP space
  **/
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  password operations
  Change your Backup FTP password
  **/
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP/password', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  Create a new Backup FTP ACL
  **/
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP/access', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  public post(path: PathsdedicatedhousingPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Backup Ftp assigned to this server
  Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
  **/
  public delete(path: '/dedicated/housing/{serviceName}/features/backupFTP', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Revoke this ACL
  **/
  public delete(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName?: string, ipBlock?: string}, queryParams: null, bodyParams: null): Promise<DedicatedServerTask>;
  public delete(path: PathsdedicatedhousingDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
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
 * different task operation
 */
export type DedicatedTaskFunctionEnum = 'addVirtualMac' | 'addWindowSplaFromExistingSerial' | 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'bypassAntiDDosGame' | 'changePasswordBackupFTP' | 'changeRipeOrg' | 'checkAndReleaseIp' | 'createBackupFTP' | 'createOrUpdateRipeOrg' | 'createPrivateNetwork' | 'disableFirewall' | 'enableFirewall' | 'genericMoveFloatingIp' | 'hardReboot' | 'migrateBackupFTP' | 'moveFloatingIp' | 'moveVirtualMac' | 'rebootPower8To' | 'reinstallServer' | 'releaseIp' | 'removeBackupFTP' | 'removeVirtualMac' | 'requestAccessIPMI' | 'resetIPMI' | 'resetIPMISession' | 'testIPMIhttp' | 'testIPMIpassword' | 'testIPMIping' | 'virtualMacAdd' | 'virtualMacDelete';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * A structure describing informations for APC orderable for this housing bay
 */
export interface DedicatedHousingApcOrderable {
  /**
   * Is this APC free
   *
   */
  free?: boolean;
  /**
   * Is an APC is orderable for this housing bay
   *
   */
  orderable?: boolean;
}
/**
 * Housing bay datacenters
 */
export type DedicatedHousingDatacenterEnum = 'gsw' | 'pdc1';
/**
 * Housing bay High Availablility offers
 */
export type DedicatedHousingHaRoutingOfferEnum = 'ha2x2' | 'ha2x4';
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
 * Housing bay
 */
export interface DedicatedHousingHousing {
  /**
   * Housing bay datacenter
   *
   */
  datacenter?: DedicatedHousingDatacenterEnum;
  /**
   * The name you give to the bay
   *
   */
  name?: string;
  /**
   * Housing bay network
   *
   */
  network?: DedicatedHousingNetworkInfo[];
  /**
   * Housing bay options
   *
   */
  options?: DedicatedHousingOptions;
  /**
   * The bay's description
   *
   */
  rack?: string;
  /**
   * Bay Security code
   *
   */
  securityCode?: string;
}
/**
 * A structure describing the Bay's network configuration
 */
export interface DedicatedHousingIpInfo {
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
  /**
   * Reserved addresses. You should not use them in your network
   *
   */
  reservedAddresses?: string[];
}
/**
 * A structure describing the Bay`s link information
 */
export interface DedicatedHousingLinkInfo {
  /**
   * Router port number
   *
   */
  port?: string;
  /**
   * Router in charge of your network
   *
   */
  router?: string;
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
 * A structure describing current housing options
 */
export interface DedicatedHousingOptions {
  /**
   * Number of APC connected to this housing bay
   *
   */
  apcCount?: Number;
  /**
   * Is this housing bay have handsneyes service
   *
   */
  handsneyes?: boolean;
  /**
   * High Availability routing service offer
   *
   */
  highAvailabilityRouting?: string;
}
/**
 * Housing tasks
 */
export interface DedicatedHousingTask {
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: string;
  /**
   * Function name
   *
   */
  function?: DedicatedHousingTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: string;
  /**
   * Task Creation date
   *
   */
  startDate?: string;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
}
/**
 * Distincts task
 */
export type DedicatedHousingTaskFunctionEnum = 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'changePasswordBackupFTP' | 'createBackupFTP' | 'migrateBackupFTP' | 'removeBackupFTP';
/**
 * Backup Ftp assigned to this server
 */
export interface DedicatedServerBackupFtp {
  /**
   * The backup FTP server name
   *
   */
  ftpBackupName?: string;
  /**
   * The disk space available in gigabytes
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded
   *
   */
  readOnlyDate?: string;
  /**
   * The backup FTP type
   *
   */
  type?: DedicatedServerBackupStorageTypeEnum;
  /**
   * The disk space currently used on your backup FTP in percent
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedServerBackupFtpAcl {
  /**
   * Wether to allow the CIFS (SMB) protocol for this ACL
   *
   */
  cifs?: boolean;
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
   * Whether the rule has been applied on the Backup Ftp
   *
   */
  isApplied?: boolean;
  /**
   * Date of the last object modification
   *
   */
  lastUpdate?: string;
  /**
   * Wether to allow the NFS protocol for this ACL
   *
   */
  nfs?: boolean;
}
/**
 * Different backup storage type
 */
export type DedicatedServerBackupStorageTypeEnum = 'included' | 'storage';
/**
 * Server tasks
 */
export interface DedicatedServerTask {
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: string;
  /**
   * Function name
   *
   */
  function?: DedicatedTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: string;
  /**
   * Task Creation date
   *
   */
  startDate?: string;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
}
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
type PathsDedicatedHousingGET = '/dedicated/housing' | 
'/dedicated/housing/{serviceName}' | 
'/dedicated/housing/{serviceName}/features/backupFTP' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks' | 
'/dedicated/housing/{serviceName}/orderable/APC' | 
'/dedicated/housing/{serviceName}/serviceInfos' | 
'/dedicated/housing/{serviceName}/task' | 
'/dedicated/housing/{serviceName}/task/{taskId}';

type PathsDedicatedHousingPUT = '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}' | 
'/dedicated/housing/{serviceName}/serviceInfos';

type PathsDedicatedHousingPOST = '/dedicated/housing/{serviceName}/features/backupFTP' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access' | 
'/dedicated/housing/{serviceName}/features/backupFTP/password' | 
'/dedicated/housing/{serviceName}/task/{taskId}/cancel';

type PathsDedicatedHousingDELETE = '/dedicated/housing/{serviceName}/features/backupFTP' | 
'/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}';

export class ApiDedicatedHousing extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  authorizableBlocks operations
  Get all IP blocks that can be used in the ACL
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<DedicatedServerBackupFtpAcl>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Backup Ftp assigned to this server
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP', pathParams: {serviceName: string}): Promise<DedicatedServerBackupFtp>;
  /**
  Housing bay
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}', pathParams: {serviceName: string}): Promise<DedicatedHousingHousing>;
  /**
  Housing tasks
  Get this object properties
  **/
  public get(path: '/dedicated/housing/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<DedicatedHousingTask>;
  /**
  List the dedicated.housing.Task objects
  View task list
  **/
  public get(path: '/dedicated/housing/{serviceName}/task', pathParams: {serviceName: string}, queryParams: {status?: DedicatedTaskStatusEnum, function?: DedicatedHousingTaskFunctionEnum}): Promise<Number[]>;
  /**
  APC operations
  Is an APC orderable for this housing bay
  **/
  public get(path: '/dedicated/housing/{serviceName}/orderable/APC', pathParams: {serviceName: string}): Promise<DedicatedHousingApcOrderable>;
  /**
  Operations about the HOUSING service
  List available services
  **/
  public get(path: '/dedicated/housing'): Promise<string[]>;
  public get(path: PathsDedicatedHousingGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dedicated/housing/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Alter this object properties
  **/
  public put(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<void>;
  public put(path: PathsDedicatedHousingPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  password operations
  Change your Backup FTP password
  **/
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP/password', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  Create a new Backup FTP ACL
  **/
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP/access', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  Backup Ftp assigned to this server
  Create a new Backup FTP space
  **/
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  cancel operations
  this action stop the task progression if it's possible
  **/
  public post(path: '/dedicated/housing/{serviceName}/task/{taskId}/cancel', pathParams: {serviceName: string, taskId: Number}): Promise<void>;
  public post(path: PathsDedicatedHousingPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Revoke this ACL
  **/
  public delete(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<DedicatedServerTask>;
  /**
  Backup Ftp assigned to this server
  Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
  **/
  public delete(path: '/dedicated/housing/{serviceName}/features/backupFTP', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  public delete(path: PathsDedicatedHousingDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

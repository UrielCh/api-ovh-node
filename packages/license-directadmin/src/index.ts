import { ApiCommon, OvhApi, OvhParamType } from '@ovh-api/common';
/**
 * A short description of what does the Task on your license
 */
export type LicenseActionType = 'addWindowFromExistingSerial' | 'changeIp' | 'changeOs' | 'installLicense' | 'optionUpgrade' | 'releaseOption' | 'versionUpgrade';
/**
 * Messages from change IP
 */
export type LicenseChangeIpMessageEnum = 'OK' | 'destinationNotAllowed' | 'licenseAlreadyExists' | 'notAllowedToHandleThis' | 'notSameType' | 'sameIp' | 'versionNotAllowed';
/**
 * License change ip status return
 */
export interface LicenseChangeIpStatus {
  /**
   */
  message?: LicenseChangeIpMessageEnum;
  /**
   */
  success?: boolean;
}
/**
 * The serviceTypes allowed to Order a DirectAdmin version
 */
export interface LicenseDirectAdminOrderConfiguration {
  /**
   */
  orderableVersions?: LicenseOrderableDirectAdminCompatibilityInfos[];
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
}
/**
 * All operating systems available for DirectAdmin products
 */
export type LicenseDirectAdminOsEnum = 'CentOs_5.0_32' | 'CentOs_5.0_64' | 'CentOs_6_32' | 'CentOs_6_64' | 'CentOs_7_64' | 'Debian_5.0_32' | 'Debian_5.0_64' | 'Debian_6.0_32' | 'Debian_6.0_64' | 'Debian_7.0_32' | 'Debian_7.0_64' | 'Debian_8.0_64' | 'FreeBSD_7.x_32' | 'FreeBSD_7.x_64' | 'FreeBSD_8.x_64' | 'FreeBSD_9.x_64';
/**
 * All versions for DirectAdmin products
 */
export type LicenseDirectAdminVersionEnum = 'DIRECTADMIN_1' | 'directadmin-license';
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * All versions available for DirectAdmin products
 */
export interface LicenseOrderableDirectAdminCompatibilityInfos {
  /**
   */
  version?: LicenseOrderableDirectAdminVersionEnum;
}
/**
 * All versions available for DirectAdmin products
 */
export type LicenseOrderableDirectAdminVersionEnum = 'DIRECTADMIN_1' | 'directadmin-license';
/**
 * All states a license can be in
 */
export type LicenseStateEnum = 'ok' | 'released' | 'terminated' | 'toDeliver';
/**
 * licenses Todos
 */
export interface LicenseTask {
  /**
   * This Task description
   *
   */
  action?: LicenseActionType;
  /**
   * When was this Task done
   *
   */
  doneDate?: string;
  /**
   * The last time this Task was updated
   *
   */
  lastUpdate?: string;
  /**
   * This Task name
   *
   */
  name?: string;
  /**
   * Current Taks status
   *
   */
  status?: LicenseTaskStateEnum;
  /**
   * This Task id
   *
   */
  taskId?: number;
  /**
   * When was this Task created
   *
   */
  todoDate?: string;
}
/**
 * All states a license Task can be in
 */
export type LicenseTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Your DirectAdmin license
 */
export interface LicenseDirectadminDirectAdmin {
  /**
   * The client id on license provider side
   *
   */
  clientId?: number;
  /**
   * This license creation date
   *
   */
  creation?: string;
  /**
   * Shall we delete this on expiration ?
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The internal name of your license
   *
   */
  domain?: string;
  /**
   * The ip on which this license is attached
   *
   */
  ip?: string;
  /**
   * The license id on license provider side
   *
   */
  licenseId?: string;
  /**
   * This license operating system
   *
   */
  os?: LicenseDirectAdminOsEnum;
  /**
   * This license state
   *
   */
  status?: LicenseStateEnum;
  /**
   * This license version
   *
   */
  version?: LicenseDirectAdminVersionEnum;
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
  period?: number;
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
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
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
  possibleRenewPeriod?: number[];
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
  serviceId?: number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsLicenseDirectadminGET = '/license/directadmin' | 
'/license/directadmin/orderableVersions' | 
'/license/directadmin/{serviceName}' | 
'/license/directadmin/{serviceName}/allowedDestinationIp' | 
'/license/directadmin/{serviceName}/canLicenseBeMovedTo' | 
'/license/directadmin/{serviceName}/serviceInfos' | 
'/license/directadmin/{serviceName}/tasks' | 
'/license/directadmin/{serviceName}/tasks/{taskId}';

type PathsLicenseDirectadminPUT = '/license/directadmin/{serviceName}' | 
'/license/directadmin/{serviceName}/serviceInfos';

type PathsLicenseDirectadminPOST = '/license/directadmin/{serviceName}/changeIp' | 
'/license/directadmin/{serviceName}/changeOs' | 
'/license/directadmin/{serviceName}/confirmTermination' | 
'/license/directadmin/{serviceName}/terminate';

export class ApiLicenseDirectadmin extends ApiCommon {
  constructor(engine: OvhApi) {
    super(engine);
  }
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/directadmin'): Promise<string[]>;
  /**
  Get the orderable DirectAdmin versions
  Get the orderable DirectAdmin versions
  **/
  public get(path: '/license/directadmin/orderableVersions'): Promise<LicenseDirectAdminOrderConfiguration[]>;
  /**
  Your DirectAdmin license
  Get this object properties
  **/
  public get(path: '/license/directadmin/{serviceName}', params: {serviceName: string}): Promise<LicenseDirectadminDirectAdmin>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/directadmin/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/directadmin/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<LicenseChangeIpStatus>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/directadmin/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.Task objects
  tasks linked to this license
  **/
  public get(path: '/license/directadmin/{serviceName}/tasks', params: {serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/directadmin/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<LicenseTask>;
  public get(path: PathsLicenseDirectadminGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Your DirectAdmin license
  Alter this object properties
  **/
  public put(path: '/license/directadmin/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/directadmin/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseDirectadminPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/directadmin/{serviceName}/changeIp', params: {serviceName: string}): Promise<LicenseTask>;
  /**
  changeOs operations
  Change the Operating System for a license
  **/
  public post(path: '/license/directadmin/{serviceName}/changeOs', params: {serviceName: string}): Promise<LicenseTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/directadmin/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/directadmin/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseDirectadminPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}

import { ApiCommon, OvhEngine, OvhParamType } from '@ovh-api/common';
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
 * The serviceTypes allowed to Order a CPanel version
 */
export interface LicenseCpanelOrderConfiguration {
  /**
   */
  orderableVersions?: LicenseOrderableCpanelCompatibilityInfos[];
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
}
/**
 * All versions available for Cpanel products
 */
export type LicenseCpanelVersionEnum = 'VERSION_11_FOR_LINUX' | 'VERSION_11_FOR_VIRTUOZZO' | 'VERSION_11_FOR_VPS' | 'cpanel-license-version-11' | 'cpanel-license-version-11-for-virtuozzo' | 'cpanel-license-version-11-for-vps';
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * All versions available for Cpanel products
 */
export interface LicenseOrderableCpanelCompatibilityInfos {
  /**
   */
  version?: LicenseOrderableCpanelVersionEnum;
}
/**
 * All versions available for Cpanel products
 */
export type LicenseOrderableCpanelVersionEnum = 'VERSION_11_FOR_LINUX' | 'VERSION_11_FOR_VIRTUOZZO' | 'VERSION_11_FOR_VPS' | 'cpanel-license-version-11' | 'cpanel-license-version-11-for-virtuozzo' | 'cpanel-license-version-11-for-vps';
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
 * Your Cpanel license
 */
export interface LicenseCpanelCpanel {
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
   * This license state
   *
   */
  status?: LicenseStateEnum;
  /**
   * This license version
   *
   */
  version?: LicenseCpanelVersionEnum;
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
type PathsLicenseCpanelGET = '/license/cpanel' | 
'/license/cpanel/orderableVersions' | 
'/license/cpanel/{serviceName}' | 
'/license/cpanel/{serviceName}/allowedDestinationIp' | 
'/license/cpanel/{serviceName}/canLicenseBeMovedTo' | 
'/license/cpanel/{serviceName}/serviceInfos' | 
'/license/cpanel/{serviceName}/tasks' | 
'/license/cpanel/{serviceName}/tasks/{taskId}';

type PathsLicenseCpanelPUT = '/license/cpanel/{serviceName}' | 
'/license/cpanel/{serviceName}/serviceInfos';

type PathsLicenseCpanelPOST = '/license/cpanel/{serviceName}/changeIp' | 
'/license/cpanel/{serviceName}/confirmTermination' | 
'/license/cpanel/{serviceName}/terminate';

export class ApiLicenseCpanel extends ApiCommon {
  constructor(engine: OvhEngine) {
    super(engine);
  }
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/cpanel'): Promise<string[]>;
  /**
  Get the orderable CPanel versions
  Get the orderable CPanel versions
  **/
  public get(path: '/license/cpanel/orderableVersions'): Promise<LicenseCpanelOrderConfiguration[]>;
  /**
  Your Cpanel license
  Get this object properties
  **/
  public get(path: '/license/cpanel/{serviceName}', params: {serviceName: string}): Promise<LicenseCpanelCpanel>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/cpanel/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/cpanel/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<LicenseChangeIpStatus>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/cpanel/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.Task objects
  tasks linked to this license
  **/
  public get(path: '/license/cpanel/{serviceName}/tasks', params: {serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/cpanel/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<LicenseTask>;
  public get(path: PathsLicenseCpanelGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Your Cpanel license
  Alter this object properties
  **/
  public put(path: '/license/cpanel/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/cpanel/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseCpanelPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/cpanel/{serviceName}/changeIp', params: {serviceName: string}): Promise<LicenseTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/cpanel/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/cpanel/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseCpanelPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}

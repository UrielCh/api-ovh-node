import { ApiCommon } from '@ovh-api/common';
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
  success?: boolean;
  /**
   */
  message?: LicenseChangeIpMessageEnum;
}
/**
 * The serviceTypes allowed to Order a CPanel version
 */
export interface LicenseCpanelOrderConfiguration {
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
  /**
   */
  orderableVersions?: LicenseOrderableCpanelCompatibilityInfos[];
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
   * The last time this Task was updated
   *
   */
  lastUpdate?: Date;
  /**
   * This Task name
   *
   */
  name?: string;
  /**
   * When was this Task created
   *
   */
  todoDate?: Date;
  /**
   * This Task description
   *
   */
  action?: LicenseActionType;
  /**
   * When was this Task done
   *
   */
  doneDate?: Date;
  /**
   * This Task id
   *
   */
  taskId?: Number;
  /**
   * Current Taks status
   *
   */
  status?: LicenseTaskStateEnum;
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
   * Shall we delete this on expiration ?
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The ip on which this license is attached
   *
   */
  ip?: string;
  /**
   * The internal name of your license
   *
   */
  domain?: string;
  /**
   * The license id on license provider side
   *
   */
  licenseId?: string;
  /**
   * This license version
   *
   */
  version?: LicenseCpanelVersionEnum;
  /**
   * This license creation date
   *
   */
  creation?: Date;
  /**
   * This license state
   *
   */
  status?: LicenseStateEnum;
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
type PathslicensecpanelGET = '/license/cpanel' | 
'/license/cpanel/{serviceName}/allowedDestinationIp' | 
'/license/cpanel/{serviceName}/serviceInfos' | 
'/license/cpanel/{serviceName}/tasks' | 
'/license/cpanel/{serviceName}/tasks/{taskId}' | 
'/license/cpanel/{serviceName}/canLicenseBeMovedTo' | 
'/license/cpanel/{serviceName}' | 
'/license/cpanel/orderableVersions';

type PathslicensecpanelPUT = '/license/cpanel/{serviceName}/serviceInfos' | 
'/license/cpanel/{serviceName}';

type PathslicensecpanelPOST = '/license/cpanel/{serviceName}/changeIp' | 
'/license/cpanel/{serviceName}/confirmTermination' | 
'/license/cpanel/{serviceName}/terminate';

class Apilicensecpanel extends ApiCommon {
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/cpanel', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/cpanel/{serviceName}/allowedDestinationIp', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/cpanel/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the license.Task objects
  tasks linked to this license
  **/
  public get(path: '/license/cpanel/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {status?: LicenseTaskStateEnum, action?: LicenseActionType}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/cpanel/{serviceName}/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<LicenseTask>;
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/cpanel/{serviceName}/canLicenseBeMovedTo', pathParams: {serviceName?: string}, queryParams: {destinationIp?: string}): Promise<LicenseChangeIpStatus>;
  /**
  Your Cpanel license
  Get this object properties
  **/
  public get(path: '/license/cpanel/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseCpanelCpanel>;
  /**
  Get the orderable CPanel versions
  Get the orderable CPanel versions
  **/
  public get(path: '/license/cpanel/orderableVersions', pathParams: null, queryParams: {ip?: string}): Promise<LicenseCpanelOrderConfiguration[]>;
  public get(path: PathslicensecpanelGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/cpanel/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Your Cpanel license
  Alter this object properties
  **/
  public put(path: '/license/cpanel/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathslicensecpanelPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/cpanel/{serviceName}/changeIp', pathParams: {serviceName?: string}, bodyParams: null): Promise<LicenseTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/cpanel/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/cpanel/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  public post(path: PathslicensecpanelPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
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
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * All versions available for WorkLight products
 */
export interface LicenseOrderableWorkLightCompatibilityInfos {
  /**
   */
  version?: LicenseWorkLightVersionEnum;
}
/**
 * A short description of what does the Task on your license
 */
export type LicenseActionType = 'addWindowFromExistingSerial' | 'changeIp' | 'changeOs' | 'installLicense' | 'optionUpgrade' | 'releaseOption' | 'versionUpgrade';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * Allowed WorkLight versions per matching serviceTypes
 */
export interface LicenseWorkLightOrderConfiguration {
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
  /**
   */
  orderableVersions?: LicenseOrderableWorkLightCompatibilityInfos[];
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
 * All versions for WorkLight product
 */
export type LicenseWorkLightVersionEnum = 'VERSION-6.1U.1CPU' | 'VERSION-6.1U.2CPU' | 'VERSION-6.2U.1CPU' | 'VERSION-6.2U.2CPU' | 'VERSION-6.EVALUATION' | 'worklight-license-version-6-1cpu-1u' | 'worklight-license-version-6-1cpu-2u' | 'worklight-license-version-6-2cpu-1u' | 'worklight-license-version-6-2cpu-2u';
/**
 * Messages from change IP
 */
export type LicenseChangeIpMessageEnum = 'OK' | 'destinationNotAllowed' | 'licenseAlreadyExists' | 'notAllowedToHandleThis' | 'notSameType' | 'sameIp' | 'versionNotAllowed';
/**
 * Your WorkLight license
 */
export interface LicenseWorklightWorkLight {
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
  version?: LicenseWorkLightVersionEnum;
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
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
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
 * All states a license can be in
 */
export type LicenseStateEnum = 'ok' | 'released' | 'terminated' | 'toDeliver';
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
 * All states a license Task can be in
 */
export type LicenseTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathslicenseworklightGET = '/license/worklight/{serviceName}/canLicenseBeMovedTo' | 
'/license/worklight/{serviceName}/allowedDestinationIp' | 
'/license/worklight/{serviceName}/tasks' | 
'/license/worklight/{serviceName}/tasks/{taskId}' | 
'/license/worklight/{serviceName}' | 
'/license/worklight/{serviceName}/serviceInfos' | 
'/license/worklight/orderableVersions' | 
'/license/worklight';

type PathslicenseworklightPUT = '/license/worklight/{serviceName}' | 
'/license/worklight/{serviceName}/serviceInfos';

type PathslicenseworklightPOST = '/license/worklight/{serviceName}/confirmTermination' | 
'/license/worklight/{serviceName}/changeIp' | 
'/license/worklight/{serviceName}/terminate';

class Apilicenseworklight extends ApiCommon {
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/worklight/{serviceName}/canLicenseBeMovedTo', pathParams: {serviceName?: string}, queryParams: {destinationIp?: string}): Promise<LicenseChangeIpStatus>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/worklight/{serviceName}/allowedDestinationIp', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the license.Task objects
  Tasks linked to this license
  **/
  public get(path: '/license/worklight/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<LicenseTask>;
  /**
  Your WorkLight license
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseWorklightWorkLight>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Get the orderable WorkLight versions
  Get the orderable WorkLight versions
  **/
  public get(path: '/license/worklight/orderableVersions', pathParams: null, queryParams: {ip?: string}): Promise<LicenseWorkLightOrderConfiguration[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/worklight', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathslicenseworklightGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Your WorkLight license
  Alter this object properties
  **/
  public put(path: '/license/worklight/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/worklight/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathslicenseworklightPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/worklight/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/worklight/{serviceName}/changeIp', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<LicenseTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/worklight/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  public post(path: PathslicenseworklightPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
}

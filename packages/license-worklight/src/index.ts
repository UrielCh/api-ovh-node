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
  message?: LicenseChangeIpMessageEnum;
  /**
   */
  success?: boolean;
}
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * All versions available for WorkLight products
 */
export interface LicenseOrderableWorkLightCompatibilityInfos {
  /**
   */
  version?: LicenseWorkLightVersionEnum;
}
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
  taskId?: Number;
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
 * Allowed WorkLight versions per matching serviceTypes
 */
export interface LicenseWorkLightOrderConfiguration {
  /**
   */
  orderableVersions?: LicenseOrderableWorkLightCompatibilityInfos[];
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
}
/**
 * All versions for WorkLight product
 */
export type LicenseWorkLightVersionEnum = 'VERSION-6.1U.1CPU' | 'VERSION-6.1U.2CPU' | 'VERSION-6.2U.1CPU' | 'VERSION-6.2U.2CPU' | 'VERSION-6.EVALUATION' | 'worklight-license-version-6-1cpu-1u' | 'worklight-license-version-6-1cpu-2u' | 'worklight-license-version-6-2cpu-1u' | 'worklight-license-version-6-2cpu-2u';
/**
 * Your WorkLight license
 */
export interface LicenseWorklightWorkLight {
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
  version?: LicenseWorkLightVersionEnum;
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
type PathsLicenseWorklightGET = '/license/worklight' | 
'/license/worklight/orderableVersions' | 
'/license/worklight/{serviceName}' | 
'/license/worklight/{serviceName}/allowedDestinationIp' | 
'/license/worklight/{serviceName}/canLicenseBeMovedTo' | 
'/license/worklight/{serviceName}/serviceInfos' | 
'/license/worklight/{serviceName}/tasks' | 
'/license/worklight/{serviceName}/tasks/{taskId}';

type PathsLicenseWorklightPUT = '/license/worklight/{serviceName}' | 
'/license/worklight/{serviceName}/serviceInfos';

type PathsLicenseWorklightPOST = '/license/worklight/{serviceName}/changeIp' | 
'/license/worklight/{serviceName}/confirmTermination' | 
'/license/worklight/{serviceName}/terminate';

export class ApiLicenseWorklight extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/worklight/{serviceName}/canLicenseBeMovedTo', pathParams: {serviceName: string}, queryParams: {destinationIp?: string}): Promise<LicenseChangeIpStatus>;
  /**
  Your WorkLight license
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}', pathParams: {serviceName: string}): Promise<LicenseWorklightWorkLight>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/worklight/{serviceName}/allowedDestinationIp', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  List the license.Task objects
  Tasks linked to this license
  **/
  public get(path: '/license/worklight/{serviceName}/tasks', pathParams: {serviceName: string}, queryParams: {action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}/tasks/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<LicenseTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Get the orderable WorkLight versions
  Get the orderable WorkLight versions
  **/
  public get(path: '/license/worklight/orderableVersions', pathParams: undefined, queryParams: {ip?: string}): Promise<LicenseWorkLightOrderConfiguration[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/worklight'): Promise<string[]>;
  public get(path: PathsLicenseWorklightGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Your WorkLight license
  Alter this object properties
  **/
  public put(path: '/license/worklight/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/worklight/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseWorklightPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/worklight/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/worklight/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/worklight/{serviceName}/changeIp', pathParams: {serviceName: string}): Promise<LicenseTask>;
  public post(path: PathsLicenseWorklightPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

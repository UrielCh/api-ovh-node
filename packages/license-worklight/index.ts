import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
  message: LicenseChangeIpMessageEnum;
  /**
   */
  success: boolean;
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
  version: LicenseWorkLightVersionEnum;
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
  action: LicenseActionType;
  /**
   * When was this Task done
   *
   */
  doneDate?: string;
  /**
   * The last time this Task was updated
   *
   */
  lastUpdate: string;
  /**
   * This Task name
   *
   */
  name: string;
  /**
   * Current Taks status
   *
   */
  status: LicenseTaskStateEnum;
  /**
   * This Task id
   *
   */
  taskId: number;
  /**
   * When was this Task created
   *
   */
  todoDate: string;
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
  orderableVersions: LicenseOrderableWorkLightCompatibilityInfos[];
  /**
   */
  serviceType: LicenseLicenseTypeEnum;
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
  creation: string;
  /**
   * Shall we delete this on expiration ?
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The internal name of your license
   *
   */
  domain: string;
  /**
   * The ip on which this license is attached
   *
   */
  ip: string;
  /**
   * The license id on license provider side
   *
   */
  licenseId: string;
  /**
   * This license state
   *
   */
  status: LicenseStateEnum;
  /**
   * This license version
   *
   */
  version: LicenseWorkLightVersionEnum;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced: boolean;
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
  canDeleteAtExpiration: boolean;
  /**
   */
  contactAdmin: string;
  /**
   */
  contactBilling: string;
  /**
   */
  contactTech: string;
  /**
   */
  creation: string;
  /**
   */
  domain: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration: string;
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
  renewalType: ServiceRenewalTypeEnum;
  /**
   */
  serviceId: number;
  /**
   */
  status: ServiceStateEnum;
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

export class ApiLicenseWorklight extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/worklight'): Promise<string[]>;
  /**
  Get the orderable WorkLight versions
  Get the orderable WorkLight versions
  **/
  public get(path: '/license/worklight/orderableVersions'): Promise<LicenseWorkLightOrderConfiguration[]>;
  /**
  Your WorkLight license
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}', params: {serviceName: string}): Promise<LicenseWorklightWorkLight>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/worklight/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/worklight/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<LicenseChangeIpStatus>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.Task objects
  Tasks linked to this license
  **/
  public get(path: '/license/worklight/{serviceName}/tasks', params: {serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/worklight/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<LicenseTask>;
  public get(path: PathsLicenseWorklightGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Your WorkLight license
  Alter this object properties
  **/
  public put(path: '/license/worklight/{serviceName}', params: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/worklight/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseWorklightPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/worklight/{serviceName}/changeIp', params: {serviceName: string}): Promise<LicenseTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/worklight/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/worklight/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseWorklightPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}

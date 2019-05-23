import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A short description of what does the Task on your license
 */
export type LicenseActionType = 'addWindowFromExistingSerial' | 'changeIp' | 'changeOs' | 'installLicense' | 'optionUpgrade' | 'releaseOption' | 'versionUpgrade';
/**
 * Allowed CloudLinux versions per matching serviceTypes
 */
export interface LicenseCloudLinuxOrderConfiguration {
  /**
   */
  orderableVersions: LicenseOrderableCloudLinuxCompatibilityInfos[];
  /**
   */
  serviceType: LicenseLicenseTypeEnum;
}
/**
 * All versions for CloudLinux product
 */
export type LicenseCloudLinuxVersionEnum = 'SINGLE' | 'WITH_CPANEL' | 'WITH_PLESK12' | 'cloudlinux-license';
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * All versions available for CloudLinux products
 */
export interface LicenseOrderableCloudLinuxCompatibilityInfos {
  /**
   */
  version: LicenseCloudLinuxVersionEnum;
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
 * Your CloudLinux license
 */
export interface LicenseCloudLinuxCloudLinux {
  /**
   * This license creation date
   *
   */
  creation: string;
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
  version: LicenseCloudLinuxVersionEnum;
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
type PathsLicenseCloudLinuxGET = '/license/cloudLinux' | 
'/license/cloudLinux/orderableVersions' | 
'/license/cloudLinux/{serviceName}' | 
'/license/cloudLinux/{serviceName}/serviceInfos' | 
'/license/cloudLinux/{serviceName}/tasks' | 
'/license/cloudLinux/{serviceName}/tasks/{taskId}';

type PathsLicenseCloudLinuxPUT = '/license/cloudLinux/{serviceName}/serviceInfos';

type PathsLicenseCloudLinuxPOST = '/license/cloudLinux/{serviceName}/confirmTermination' | 
'/license/cloudLinux/{serviceName}/terminate';

export class ApiLicenseCloudLinux extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/cloudLinux'): Promise<string[]>;
  /**
  Get the orderable CloudLinux versions
  Get the orderable CloudLinux versions
  **/
  public get(path: '/license/cloudLinux/orderableVersions'): Promise<LicenseCloudLinuxOrderConfiguration[]>;
  /**
  Your CloudLinux license
  Get this object properties
  **/
  public get(path: '/license/cloudLinux/{serviceName}', params: {serviceName: string}): Promise<LicenseCloudLinuxCloudLinux>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/cloudLinux/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.Task objects
  Tasks linked to this license
  **/
  public get(path: '/license/cloudLinux/{serviceName}/tasks', params: {serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/cloudLinux/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<LicenseTask>;
  public get(path: PathsLicenseCloudLinuxGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/cloudLinux/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseCloudLinuxPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/cloudLinux/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/cloudLinux/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseCloudLinuxPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}
export default ApiLicenseCloudLinux;

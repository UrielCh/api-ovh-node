import { ApiCommon } from '@ovh-api/common';
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
  serviceType?: LicenseLicenseTypeEnum;
  /**
   */
  orderableVersions?: LicenseOrderableCloudLinuxCompatibilityInfos[];
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
  version?: LicenseCloudLinuxVersionEnum;
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
 * Your CloudLinux license
 */
export interface LicenseCloudLinuxCloudLinux {
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
  version?: LicenseCloudLinuxVersionEnum;
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
   * period of renew in month
   *
   */
  period?: Number;
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
type PathslicensecloudLinuxGET = '/license/cloudLinux/{serviceName}' | 
'/license/cloudLinux/{serviceName}/serviceInfos' | 
'/license/cloudLinux/{serviceName}/tasks' | 
'/license/cloudLinux/{serviceName}/tasks/{taskId}' | 
'/license/cloudLinux/orderableVersions' | 
'/license/cloudLinux';

type PathslicensecloudLinuxPUT = '/license/cloudLinux/{serviceName}/serviceInfos';

type PathslicensecloudLinuxPOST = '/license/cloudLinux/{serviceName}/confirmTermination' | 
'/license/cloudLinux/{serviceName}/terminate';

class ApilicensecloudLinux extends ApiCommon {
  /**
  Your CloudLinux license
  Get this object properties
  **/
  public get(path: '/license/cloudLinux/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseCloudLinuxCloudLinux>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/cloudLinux/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the license.Task objects
  Tasks linked to this license
  **/
  public get(path: '/license/cloudLinux/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/cloudLinux/{serviceName}/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<LicenseTask>;
  /**
  Get the orderable CloudLinux versions
  Get the orderable CloudLinux versions
  **/
  public get(path: '/license/cloudLinux/orderableVersions', pathParams: null, queryParams: {ip?: string}): Promise<LicenseCloudLinuxOrderConfiguration[]>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/cloudLinux', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathslicensecloudLinuxGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/cloudLinux/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathslicensecloudLinuxPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/cloudLinux/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/cloudLinux/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  public post(path: PathslicensecloudLinuxPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
/**
 * The name of an option currently enabled on your license
 */
export type LicenseOptionLabel = 'ANTISPAM_SPAMASSASSIN' | 'ANTIVIRUS_DRWEB' | 'ANTIVIRUS_KASPERSKY' | 'DOMAINS' | 'LANGUAGE_PACK' | 'POWERPACK' | 'SQL_SERVER' | 'VIRTUOZZO_CONTAINERS';
/**
 * All versions available for Virtuozzo products
 */
export interface LicenseOrderableVirtuozzoCompatibilityInfos {
  /**
   */
  compliantContainers?: LicenseOrderableVirtuozzoContainerNumberEnum[];
  /**
   */
  potentialProblems?: LicensePotentialProblemVirtuozzoEnum[];
  /**
   */
  version?: LicenseOrderableVirtuozzoVersionEnum;
}
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
 * A short description of what does the Task on your license
 */
export type LicenseActionType = 'addWindowFromExistingSerial' | 'changeIp' | 'changeOs' | 'installLicense' | 'optionUpgrade' | 'releaseOption' | 'versionUpgrade';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * Messages from change IP
 */
export type LicenseChangeIpMessageEnum = 'OK' | 'destinationNotAllowed' | 'licenseAlreadyExists' | 'notAllowedToHandleThis' | 'notSameType' | 'sameIp' | 'versionNotAllowed';
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
 * Tests that have failed for Virtuozzo products
 */
export type LicensePotentialProblemVirtuozzoEnum = 'isLinuxOs' | 'isOsVirtuozzo4Like' | 'isWindowsOs';
/**
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
/**
 * Possible values for license type
 */
export type LicenseLicenseTypeEnum = 'dedicated' | 'dedicatedCloud' | 'dedicatedFailover' | 'failover' | 'vm' | 'vps' | 'vps_ceph' | 'vps_classic' | 'vps_cloud' | 'vps_cloud_2016' | 'vps_ssd';
/**
 * Your Virtuozzo license
 */
export interface LicenseVirtuozzoVirtuozzo {
  /**
   * Shall we delete this on expiration ?
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The amount of containers this license can manage
   *
   */
  containerNumber?: LicenseVirtuozzoContainerNumberEnum;
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
   * This license product key
   *
   */
  productKey?: string;
  /**
   * The license id on license provider side
   *
   */
  licenseId?: string;
  /**
   * This license version
   *
   */
  version?: LicenseVirtuozzoVersionEnum;
  /**
   * This license Information key
   *
   */
  informationKey?: string;
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
   * This Task description
   *
   */
  action?: LicenseActionType;
  /**
   * When was this Task created
   *
   */
  todoDate?: Date;
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
 * Your License options
 */
export interface LicenseOption {
  /**
   * Specifies whether this option can be released or not
   *
   */
  canBeDeleted?: boolean;
  /**
   * Quantity or corresponding label of the designated option enabled on your license
   *
   */
  amount?: string;
  /**
   * This option designation
   *
   */
  label?: LicenseOptionLabel;
  /**
   * This option related version
   *
   */
  version?: string;
  /**
   * This option expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * All versions available for Virtuozzo products
 */
export type LicenseVirtuozzoVersionEnum = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX' | 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS';
/**
 * The serviceTypes allowed to Order a Virtuozzo version
 */
export interface LicenseVirtuozzoOrderConfiguration {
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
  /**
   */
  orderableVersions?: LicenseOrderableVirtuozzoCompatibilityInfos[];
}
/**
 * All states a license can be in
 */
export type LicenseStateEnum = 'ok' | 'released' | 'terminated' | 'toDeliver';
/**
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseOrderableVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * All versions available for Virtuozzo products
 */
export type LicenseOrderableVirtuozzoVersionEnum = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX' | 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS' | 'virtuozzo-4' | 'virtuozzo-4-for-windows';
/**
 * All states a license Task can be in
 */
export type LicenseTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
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
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
type PathslicensevirtuozzoGET = '/license/virtuozzo' | 
'/license/virtuozzo/orderableVersions' | 
'/license/virtuozzo/{serviceName}/serviceInfos' | 
'/license/virtuozzo/{serviceName}' | 
'/license/virtuozzo/{serviceName}/canLicenseBeMovedTo' | 
'/license/virtuozzo/{serviceName}/tasks' | 
'/license/virtuozzo/{serviceName}/tasks/{taskId}' | 
'/license/virtuozzo/{serviceName}/allowedDestinationIp' | 
'/license/virtuozzo/{serviceName}/option' | 
'/license/virtuozzo/{serviceName}/option/{label}';

type PathslicensevirtuozzoPUT = '/license/virtuozzo/{serviceName}/serviceInfos' | 
'/license/virtuozzo/{serviceName}';

type PathslicensevirtuozzoPOST = '/license/virtuozzo/{serviceName}/terminate' | 
'/license/virtuozzo/{serviceName}/confirmTermination' | 
'/license/virtuozzo/{serviceName}/changeIp';

type PathslicensevirtuozzoDELETE = '/license/virtuozzo/{serviceName}/option/{label}';

class Apilicensevirtuozzo extends ApiCommon {
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/virtuozzo', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Get the orderable Virtuozzo versions
  Get the orderable Virtuozzo versions
  **/
  public get(path: '/license/virtuozzo/orderableVersions', pathParams: null, queryParams: {ip?: string}): Promise<LicenseVirtuozzoOrderConfiguration[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Your Virtuozzo license
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<LicenseVirtuozzoVirtuozzo>;
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/virtuozzo/{serviceName}/canLicenseBeMovedTo', pathParams: {serviceName?: string}, queryParams: {destinationIp?: string}): Promise<LicenseChangeIpStatus>;
  /**
  List the license.Task objects
  tasks linked to this license
  **/
  public get(path: '/license/virtuozzo/{serviceName}/tasks', pathParams: {serviceName?: string}, queryParams: {action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}/tasks/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<LicenseTask>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/virtuozzo/{serviceName}/allowedDestinationIp', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the license.Option objects
  Options linked to this license
  **/
  public get(path: '/license/virtuozzo/{serviceName}/option', pathParams: {serviceName?: string}, queryParams: {label?: LicenseOptionLabel}): Promise<LicenseOptionLabel[]>;
  /**
  Your License options
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}/option/{label}', pathParams: {serviceName?: string, label?: LicenseOptionLabel}, queryParams: null): Promise<LicenseOption>;
  public get(path: PathslicensevirtuozzoGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/virtuozzo/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  Your Virtuozzo license
  Alter this object properties
  **/
  public put(path: '/license/virtuozzo/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathslicensevirtuozzoPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/virtuozzo/{serviceName}/terminate', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/virtuozzo/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<string>;
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/virtuozzo/{serviceName}/changeIp', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<LicenseTask>;
  public post(path: PathslicensevirtuozzoPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Your License options
  release this Option
  **/
  public delete(path: '/license/virtuozzo/{serviceName}/option/{label}', pathParams: {serviceName?: string, label?: LicenseOptionLabel}, queryParams: null, bodyParams: null): Promise<LicenseTask>;
  public delete(path: PathslicensevirtuozzoDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}

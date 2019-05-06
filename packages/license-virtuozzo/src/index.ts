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
 * Your License options
 */
export interface LicenseOption {
  /**
   * Quantity or corresponding label of the designated option enabled on your license
   *
   */
  amount?: string;
  /**
   * Specifies whether this option can be released or not
   *
   */
  canBeDeleted?: boolean;
  /**
   * This option expiration date
   *
   */
  expirationDate?: string;
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
}
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
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseOrderableVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
/**
 * All versions available for Virtuozzo products
 */
export type LicenseOrderableVirtuozzoVersionEnum = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX' | 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS' | 'virtuozzo-4' | 'virtuozzo-4-for-windows';
/**
 * Tests that have failed for Virtuozzo products
 */
export type LicensePotentialProblemVirtuozzoEnum = 'isLinuxOs' | 'isOsVirtuozzo4Like' | 'isWindowsOs';
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
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
/**
 * The serviceTypes allowed to Order a Virtuozzo version
 */
export interface LicenseVirtuozzoOrderConfiguration {
  /**
   */
  orderableVersions?: LicenseOrderableVirtuozzoCompatibilityInfos[];
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
}
/**
 * All versions available for Virtuozzo products
 */
export type LicenseVirtuozzoVersionEnum = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX' | 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS';
/**
 * Your Virtuozzo license
 */
export interface LicenseVirtuozzoVirtuozzo {
  /**
   * The amount of containers this license can manage
   *
   */
  containerNumber?: LicenseVirtuozzoContainerNumberEnum;
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
   * This license Information key
   *
   */
  informationKey?: string;
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
   * This license product key
   *
   */
  productKey?: string;
  /**
   * This license state
   *
   */
  status?: LicenseStateEnum;
  /**
   * This license version
   *
   */
  version?: LicenseVirtuozzoVersionEnum;
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
type PathsLicenseVirtuozzoGET = '/license/virtuozzo' | 
'/license/virtuozzo/orderableVersions' | 
'/license/virtuozzo/{serviceName}' | 
'/license/virtuozzo/{serviceName}/allowedDestinationIp' | 
'/license/virtuozzo/{serviceName}/canLicenseBeMovedTo' | 
'/license/virtuozzo/{serviceName}/option' | 
'/license/virtuozzo/{serviceName}/option/{label}' | 
'/license/virtuozzo/{serviceName}/serviceInfos' | 
'/license/virtuozzo/{serviceName}/tasks' | 
'/license/virtuozzo/{serviceName}/tasks/{taskId}';

type PathsLicenseVirtuozzoPUT = '/license/virtuozzo/{serviceName}' | 
'/license/virtuozzo/{serviceName}/serviceInfos';

type PathsLicenseVirtuozzoPOST = '/license/virtuozzo/{serviceName}/changeIp' | 
'/license/virtuozzo/{serviceName}/confirmTermination' | 
'/license/virtuozzo/{serviceName}/terminate';

type PathsLicenseVirtuozzoDELETE = '/license/virtuozzo/{serviceName}/option/{label}';

export class ApiLicenseVirtuozzo extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/virtuozzo'): Promise<string[]>;
  /**
  Get the orderable Virtuozzo versions
  Get the orderable Virtuozzo versions
  **/
  public get(path: '/license/virtuozzo/orderableVersions', pathParams: undefined, queryParams: {ip?: string}): Promise<LicenseVirtuozzoOrderConfiguration[]>;
  /**
  Your Virtuozzo license
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}', pathParams: {serviceName: string}): Promise<LicenseVirtuozzoVirtuozzo>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/virtuozzo/{serviceName}/allowedDestinationIp', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/virtuozzo/{serviceName}/canLicenseBeMovedTo', pathParams: {serviceName: string}, queryParams: {destinationIp?: string}): Promise<LicenseChangeIpStatus>;
  /**
  List the license.Option objects
  Options linked to this license
  **/
  public get(path: '/license/virtuozzo/{serviceName}/option', pathParams: {serviceName: string}, queryParams: {label?: LicenseOptionLabel}): Promise<LicenseOptionLabel[]>;
  /**
  Your License options
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}/option/{label}', pathParams: {serviceName: string, label: LicenseOptionLabel}): Promise<LicenseOption>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the license.Task objects
  tasks linked to this license
  **/
  public get(path: '/license/virtuozzo/{serviceName}/tasks', pathParams: {serviceName: string}, queryParams: {status?: LicenseTaskStateEnum, action?: LicenseActionType}): Promise<Number[]>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/virtuozzo/{serviceName}/tasks/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<LicenseTask>;
  public get(path: PathsLicenseVirtuozzoGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Your Virtuozzo license
  Alter this object properties
  **/
  public put(path: '/license/virtuozzo/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/virtuozzo/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsLicenseVirtuozzoPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/virtuozzo/{serviceName}/changeIp', pathParams: {serviceName: string}): Promise<LicenseTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/virtuozzo/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/virtuozzo/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseVirtuozzoPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Your License options
  release this Option
  **/
  public delete(path: '/license/virtuozzo/{serviceName}/option/{label}', pathParams: {serviceName: string, label: LicenseOptionLabel}): Promise<LicenseTask>;
  public delete(path: PathsLicenseVirtuozzoDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

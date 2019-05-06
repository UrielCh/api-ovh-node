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
 * All quantities of domain available for a license
 */
export type LicenseDomainNumberEnum = '0' | '1' | '10' | '100' | '30' | '300' | 'unlimited';
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
  expirationDate?: Date;
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
 * All antivirus available for Plesk products
 */
export type LicenseOrderableAntivirusEnum = 'DR_WEB' | 'KASPERSKY_UNLIMITED_MAILBOXES' | 'kaspersky';
/**
 * All versions available for Plesk products
 */
export interface LicenseOrderablePleskCompatibilityInfos {
  /**
   */
  canHavePowerPack?: boolean;
  /**
   */
  canHaveResellerManagement?: boolean;
  /**
   */
  canHaveWordpressToolkit?: boolean;
  /**
   */
  compliantAntivirus?: LicenseOrderableAntivirusEnum[];
  /**
   */
  compliantApplicationSets?: LicensePleskApplicationSetEnum[];
  /**
   */
  compliantDomains?: LicenseOrderablePleskDomainNumberEnum[];
  /**
   */
  compliantLanguagePack?: LicenseOrderablePleskLanguagePackEnum[];
  /**
   */
  potentialProblems?: LicensePotentialProblemPleskEnum[];
  /**
   */
  version?: LicensePleskVersionEnum;
}
/**
 * All domain available for Plesk products
 */
export type LicenseOrderablePleskDomainNumberEnum = '10' | '100' | '30' | '300' | 'hostingsuite' | 'unlimited';
/**
 * All language pack numbers available for Plesk products
 */
export type LicenseOrderablePleskLanguagePackEnum = '1' | '1-extra-language-for-plesk12' | '2' | '2-extra-languages-for-plesk12' | '3' | '3-extra-languages-for-plesk12' | '4' | '4-extra-languages-for-plesk12' | '5' | '5-extra-languages-for-plesk12' | 'unlimited' | 'unlimited-extra-languages-for-plesk12';
/**
 * Application set available for Plesk products
 */
export type LicensePleskApplicationSetEnum = 'applicationpack' | 'developerpack' | 'power-pack-for-plesk12' | 'powerpack';
/**
 * The serviceTypes allowed to Order a plesk version and associated Versions
 */
export interface LicensePleskOrderConfiguration {
  /**
   */
  orderableVersions?: LicenseOrderablePleskCompatibilityInfos[];
  /**
   */
  serviceType?: LicenseLicenseTypeEnum;
}
/**
 * All versions available for Plesk products
 */
export type LicensePleskVersionEnum = 'PLESK_10_AND_LATER' | 'PLESK_10_AND_LATER_FOR_KVM' | 'PLESK_10_AND_LATER_FOR_VMWARE' | 'PLESK_10_AND_LATER_FOR_VZ' | 'PLESK_10_AND_LATER_FOR_WIN' | 'PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE' | 'PLESK_10_AND_LATER_FOR_WIN_FOR_VZ' | 'PLESK_10_AND_LATER_FOR_WIN_FOR_XEN' | 'PLESK_10_AND_LATER_FOR_XEN' | 'PLESK_12_VPS_WEB_ADMIN' | 'PLESK_12_VPS_WEB_APP' | 'PLESK_12_VPS_WEB_HOST' | 'PLESK_12_VPS_WEB_HOST_CLNX' | 'PLESK_12_VPS_WEB_PRO' | 'PLESK_12_VPS_WEB_PRO_CLNX' | 'PLESK_12_WEB_ADMIN' | 'PLESK_12_WEB_APP' | 'PLESK_12_WEB_HOST' | 'PLESK_12_WEB_HOST_CLNX' | 'PLESK_12_WEB_PRO' | 'PLESK_12_WEB_PRO_CLNX' | 'PLESK_75_RELOADED' | 'PLESK_80' | 'PLESK_80_FOR_VZ' | 'PLESK_81_FOR_WIN' | 'PLESK_9' | 'PLESK_95' | 'PLESK_95_FOR_VZ' | 'PLESK_95_FOR_WIN' | 'PLESK_9_FOR_VZ' | 'PLESK_9_FOR_WIN' | 'PLESK_ONYX_VPS_WEB_ADMIN' | 'PLESK_ONYX_VPS_WEB_APP' | 'PLESK_ONYX_VPS_WEB_HOST' | 'PLESK_ONYX_VPS_WEB_HOST_CLNX' | 'PLESK_ONYX_VPS_WEB_PRO' | 'PLESK_ONYX_VPS_WEB_PRO_CLNX' | 'PLESK_ONYX_WEB_ADMIN' | 'PLESK_ONYX_WEB_APP' | 'PLESK_ONYX_WEB_HOST' | 'PLESK_ONYX_WEB_HOST_CLNX' | 'PLESK_ONYX_WEB_PRO' | 'PLESK_ONYX_WEB_PRO_CLNX' | 'plesk-12-webadmin-for-vps' | 'plesk-12-webhost' | 'plesk-12-webhost-for-vps' | 'plesk-12-webpro' | 'plesk-12-webpro-for-vps';
/**
 * Tests that have failed for Plesk products
 */
export type LicensePotentialProblemPleskEnum = 'isHostOsHyperVLike' | 'isHostOsVMwareLike' | 'isHostOsVirtuozzo4Like' | 'isHostOsXenLike' | 'isLinuxOs' | 'isOsCloudLinux' | 'isOsPlesk10andLater' | 'isOsPlesk12' | 'isOsPleskOnyx' | 'isWindowsOs';
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
  doneDate?: Date;
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
  todoDate?: Date;
}
/**
 * All states a license Task can be in
 */
export type LicenseTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Your Plesk license
 */
export interface LicensePleskPlesk {
  /**
   * This license creation date
   *
   */
  creation?: Date;
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
   * The amount of domain this license can manage
   *
   */
  domainNumber?: LicenseDomainNumberEnum;
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
   * This license key
   *
   */
  key?: string;
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
  version?: LicensePleskVersionEnum;
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
  creation?: Date;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  expiration?: Date;
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
type PathsLicensepleskGET = '/license/plesk/orderableVersions' | 
'/license/plesk/{serviceName}/serviceInfos' | 
'/license/plesk/{serviceName}/tasks/{taskId}' | 
'/license/plesk/{serviceName}/tasks' | 
'/license/plesk/{serviceName}/option/{label}' | 
'/license/plesk/{serviceName}/option' | 
'/license/plesk/{serviceName}/canLicenseBeMovedTo' | 
'/license/plesk/{serviceName}/allowedDestinationIp' | 
'/license/plesk/{serviceName}' | 
'/license/plesk';

type PathsLicensepleskPUT = '/license/plesk/{serviceName}/serviceInfos' | 
'/license/plesk/{serviceName}';

type PathsLicensepleskPOST = '/license/plesk/{serviceName}/changeIp' | 
'/license/plesk/{serviceName}/confirmTermination' | 
'/license/plesk/{serviceName}/terminate';

type PathsLicensepleskDELETE = '/license/plesk/{serviceName}/option/{label}';

export class ApiLicenseplesk extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Get the orderable Plesk versions and their associated compatibilities
  Get the orderable Plesk versions and their associated compatibilities
  **/
  public get(path: '/license/plesk/orderableVersions', pathParams: null, queryParams: {ip?: string}): Promise<LicensePleskOrderConfiguration[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/license/plesk/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  licenses Todos
  Get this object properties
  **/
  public get(path: '/license/plesk/{serviceName}/tasks/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<LicenseTask>;
  /**
  List the license.Task objects
  tasks linked to this license
  **/
  public get(path: '/license/plesk/{serviceName}/tasks', pathParams: {serviceName: string}, queryParams: {action?: LicenseActionType, status?: LicenseTaskStateEnum}): Promise<Number[]>;
  /**
  Your License options
  Get this object properties
  **/
  public get(path: '/license/plesk/{serviceName}/option/{label}', pathParams: {serviceName: string, label: LicenseOptionLabel}): Promise<LicenseOption>;
  /**
  List the license.Option objects
  options attached to this license
  **/
  public get(path: '/license/plesk/{serviceName}/option', pathParams: {serviceName: string}): Promise<LicenseOptionLabel[]>;
  /**
  canLicenseBeMovedTo operations
  Will tell if the ip can accept the license
  **/
  public get(path: '/license/plesk/{serviceName}/canLicenseBeMovedTo', pathParams: {serviceName: string}, queryParams: {destinationIp?: string}): Promise<LicenseChangeIpStatus>;
  /**
  allowedDestinationIp operations
  Returns an array of ips where the license can be moved to
  **/
  public get(path: '/license/plesk/{serviceName}/allowedDestinationIp', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Your Plesk license
  Get this object properties
  **/
  public get(path: '/license/plesk/{serviceName}', pathParams: {serviceName: string}): Promise<LicensePleskPlesk>;
  /**
  Operations about the LICENSE service
  List available services
  **/
  public get(path: '/license/plesk'): Promise<string[]>;
  public get(path: PathsLicensepleskGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/license/plesk/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Your Plesk license
  Alter this object properties
  **/
  public put(path: '/license/plesk/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsLicensepleskPUT, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  changeIp operations
  Move this license to another Ip
  **/
  public post(path: '/license/plesk/{serviceName}/changeIp', pathParams: {serviceName: string}): Promise<LicenseTask>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/license/plesk/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/license/plesk/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  public post(path: PathsLicensepleskPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Your License options
  release this Option
  **/
  public delete(path: '/license/plesk/{serviceName}/option/{label}', pathParams: {serviceName: string, label: LicenseOptionLabel}): Promise<LicenseTask>;
  public delete(path: PathsLicensepleskDELETE, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
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
 * Veeeam Enterprise offer
 */
export interface VeeamVeeamEnterpriseAccount {
  /**
   * OVH Enterprise Manager IP
   *
   */
  sourceIp?: string;
  /**
   * This Backup Server port
   *
   */
  port?: Number;
  /**
   * This Backup Server IP
   *
   */
  ip?: string;
  /**
   * Your Veeam Enterprise Service name
   *
   */
  serviceName?: string;
}
/**
 * Operation with the Enterprise Account
 */
export interface VeeamVeeamEnterpriseTask {
  /**
   * Task completion date
   *
   */
  endDate?: Date;
  /**
   * Task name
   *
   */
  name?: string;
  /**
   * Current progress
   *
   */
  progress?: Number;
  /**
   * Current Task state
   *
   */
  state?: VeeamEnterpriseTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId?: Number;
  /**
   * Task creation date
   *
   */
  startDate?: Date;
}
/**
 * All possible states for a Veeam Enterprise Task
 */
export type VeeamEnterpriseTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'toCreate' | 'todo' | 'unfixed' | 'waiting' | 'waitingForChilds';
type PathsveeamveeamEnterpriseGET = '/veeam/veeamEnterprise' | 
'/veeam/veeamEnterprise/{serviceName}' | 
'/veeam/veeamEnterprise/{serviceName}/task' | 
'/veeam/veeamEnterprise/{serviceName}/task/{taskId}' | 
'/veeam/veeamEnterprise/{serviceName}/serviceInfos';

type PathsveeamveeamEnterprisePUT = '/veeam/veeamEnterprise/{serviceName}/serviceInfos';

type PathsveeamveeamEnterprisePOST = '/veeam/veeamEnterprise/{serviceName}/update' | 
'/veeam/veeamEnterprise/{serviceName}/terminate' | 
'/veeam/veeamEnterprise/{serviceName}/confirmTermination' | 
'/veeam/veeamEnterprise/{serviceName}/register';

class ApiveeamveeamEnterprise extends ApiCommon {
  /**
  Operations about the VEEAMENTERPRISE service
  List available services
  **/
  public get(path: '/veeam/veeamEnterprise', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Veeeam Enterprise offer
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<VeeamVeeamEnterpriseAccount>;
  /**
  List the veeam.veeamEnterprise.Task objects
  Tasks associated with Veeam Enterprise
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: {name?: string, state?: VeeamEnterpriseTaskStateEnum}): Promise<Number[]>;
  /**
  Operation with the Enterprise Account
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<VeeamVeeamEnterpriseTask>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  public get(path: PathsveeamveeamEnterpriseGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsveeamveeamEnterprisePUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  update operations
  Update Veeam enterprise configuration
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/update', pathParams: {serviceName?: string}, bodyParams: null): Promise<VeeamVeeamEnterpriseTask[]>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  register operations
  Register Veeam Backup Server to Veeam Enterprise
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/register', pathParams: {serviceName?: string}, bodyParams: null): Promise<VeeamVeeamEnterpriseTask[]>;
  public post(path: PathsveeamveeamEnterprisePOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

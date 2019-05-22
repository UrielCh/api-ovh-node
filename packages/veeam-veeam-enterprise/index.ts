import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
/**
 * Veeeam Enterprise offer
 */
export interface VeeamVeeamEnterpriseAccount {
  /**
   * This Backup Server IP
   *
   */
  ip?: string;
  /**
   * This Backup Server port
   *
   */
  port?: number;
  /**
   * Your Veeam Enterprise Service name
   *
   */
  serviceName: string;
  /**
   * OVH Enterprise Manager IP
   *
   */
  sourceIp: string;
}
/**
 * Operation with the Enterprise Account
 */
export interface VeeamVeeamEnterpriseTask {
  /**
   * Task completion date
   *
   */
  endDate?: string;
  /**
   * Task name
   *
   */
  name: string;
  /**
   * Current progress
   *
   */
  progress: number;
  /**
   * Task creation date
   *
   */
  startDate?: string;
  /**
   * Current Task state
   *
   */
  state: VeeamEnterpriseTaskStateEnum;
  /**
   * Task id
   *
   */
  taskId: number;
}
/**
 * All possible states for a Veeam Enterprise Task
 */
export type VeeamEnterpriseTaskStateEnum = 'canceled' | 'doing' | 'done' | 'error' | 'toCreate' | 'todo' | 'unfixed' | 'waiting' | 'waitingForChilds';
type PathsVeeamVeeamEnterpriseGET = '/veeam/veeamEnterprise' | 
'/veeam/veeamEnterprise/{serviceName}' | 
'/veeam/veeamEnterprise/{serviceName}/serviceInfos' | 
'/veeam/veeamEnterprise/{serviceName}/task' | 
'/veeam/veeamEnterprise/{serviceName}/task/{taskId}';

type PathsVeeamVeeamEnterprisePUT = '/veeam/veeamEnterprise/{serviceName}/serviceInfos';

type PathsVeeamVeeamEnterprisePOST = '/veeam/veeamEnterprise/{serviceName}/confirmTermination' | 
'/veeam/veeamEnterprise/{serviceName}/register' | 
'/veeam/veeamEnterprise/{serviceName}/terminate' | 
'/veeam/veeamEnterprise/{serviceName}/update';

export class ApiVeeamVeeamEnterprise extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the VEEAMENTERPRISE service
  List available services
  **/
  public get(path: '/veeam/veeamEnterprise'): Promise<string[]>;
  /**
  Veeeam Enterprise offer
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}', params: {serviceName: string}): Promise<VeeamVeeamEnterpriseAccount>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  List the veeam.veeamEnterprise.Task objects
  Tasks associated with Veeam Enterprise
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task', params: {serviceName: string, name?: string, state?: VeeamEnterpriseTaskStateEnum}): Promise<number[]>;
  /**
  Operation with the Enterprise Account
  Get this object properties
  **/
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<VeeamVeeamEnterpriseTask>;
  public get(path: PathsVeeamVeeamEnterpriseGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsVeeamVeeamEnterprisePUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/confirmTermination', params: {serviceName: string}): Promise<string>;
  /**
  register operations
  Register Veeam Backup Server to Veeam Enterprise
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/register', params: {serviceName: string}): Promise<VeeamVeeamEnterpriseTask[]>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
  update operations
  Update Veeam enterprise configuration
  **/
  public post(path: '/veeam/veeamEnterprise/{serviceName}/update', params: {serviceName: string}): Promise<VeeamVeeamEnterpriseTask[]>;
  public post(path: PathsVeeamVeeamEnterprisePOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}

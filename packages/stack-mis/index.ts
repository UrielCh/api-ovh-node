import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
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
  possibleRenewPeriod?: number[];
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
  serviceId?: number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Stack type
 */
export type StackStackTypeEnum = 'MDS' | 'MIS' | 'MOS';
/**
 * Stack MIS
 */
export interface StackMisProduct {
  /**
   * Domain of the service
   *
   */
  domain?: string;
  /**
   * Type of the infrastructure
   *
   */
  type?: StackStackTypeEnum;
}
type PathsStackMisGET = '/stack/mis' | 
'/stack/mis/{serviceName}' | 
'/stack/mis/{serviceName}/serviceInfos';

type PathsStackMisPUT = '/stack/mis/{serviceName}/serviceInfos';

export class ApiStackMis extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the GS service
  List available services
  **/
  public get(path: '/stack/mis'): Promise<string[]>;
  /**
  Stack MIS
  Get this object properties
  **/
  public get(path: '/stack/mis/{serviceName}', params: {serviceName: string}): Promise<StackMisProduct>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/stack/mis/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsStackMisGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/stack/mis/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsStackMisPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
}

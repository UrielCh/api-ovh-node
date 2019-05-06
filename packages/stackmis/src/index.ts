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
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
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
type PathsstackmisGET = '/stack/mis' | 
'/stack/mis/{serviceName}/serviceInfos' | 
'/stack/mis/{serviceName}';

type PathsstackmisPUT = '/stack/mis/{serviceName}/serviceInfos';

class Apistackmis extends ApiCommon {
  /**
  Operations about the GS service
  List available services
  **/
  public get(path: '/stack/mis', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/stack/mis/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Stack MIS
  Get this object properties
  **/
  public get(path: '/stack/mis/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<StackMisProduct>;
  public get(path: PathsstackmisGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/stack/mis/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsstackmisPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
}

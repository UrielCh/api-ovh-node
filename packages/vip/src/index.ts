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
 * Vip Service
 */
export interface VipSupportVip {
  /**
   * VIP universes of this service
   *
   */
  universe?: VipUniverseEnum[];
  /**
   * Name of the VIP offer
   *
   */
  serviceName?: string;
}
/**
 * Available universe for VIP service
 */
export type VipUniverseEnum = 'cloud' | 'dedicated' | 'telecom' | 'web';
type PathsvipGET = '/vip/{serviceName}/serviceInfos' | 
'/vip/{serviceName}' | 
'/vip';

type PathsvipPUT = '/vip/{serviceName}/serviceInfos';

class Apivip extends ApiCommon {
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/vip/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Vip Service
  Get this object properties
  **/
  public get(path: '/vip/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<VipSupportVip>;
  /**
  Operations about the SUPPORT_PLUS service
  List available services
  **/
  public get(path: '/vip', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsvipGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/vip/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsvipPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
}

import { ApiCommon, OvhApi, OvhParamType } from '@ovh-api/common';
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
 * Vip Service
 */
export interface VipSupportVip {
  /**
   * Name of the VIP offer
   *
   */
  serviceName?: string;
  /**
   * VIP universes of this service
   *
   */
  universe?: VipUniverseEnum[];
}
/**
 * Available universe for VIP service
 */
export type VipUniverseEnum = 'cloud' | 'dedicated' | 'telecom' | 'web';
type PathsVipGET = '/vip' | 
'/vip/{serviceName}' | 
'/vip/{serviceName}/serviceInfos';

type PathsVipPUT = '/vip/{serviceName}/serviceInfos';

export class ApiVip extends ApiCommon {
  constructor(engine: OvhApi) {
    super(engine);
  }
  /**
  Operations about the SUPPORT_PLUS service
  List available services
  **/
  public get(path: '/vip'): Promise<string[]>;
  /**
  Vip Service
  Get this object properties
  **/
  public get(path: '/vip/{serviceName}', params: {serviceName: string}): Promise<VipSupportVip>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/vip/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsVipGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/vip/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsVipPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
}

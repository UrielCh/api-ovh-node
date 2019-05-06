import { ApiCommon } from '@ovh-api/common';
/**
 * Account HPC Spot
 */
export interface HpcspotAccount {
  /**
   * Name of the HPC Spot Account
   *
   */
  name?: string;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
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
 * All types a HPC Spot consumption can be in
 */
export type HpcspotConsumptionTypeEnum = 'job' | 'reservation' | 'session';
/**
 * All references a HPC Spot consumption can be in
 */
export type HpcspotConsumptionReferenceEnum = '12core.60gb.quadrok4000' | '16core.64gb' | '1core.4gb' | '1core.4gb.quadrok4000' | '2core.8gb' | '2core.8gb.quadrok4000' | '4core.15gb' | '4core.15gb.quadrok4000' | '4core.32gb' | '8core.30gb' | '8core.30gb.quadrok4000' | '8core.32gb.1teslak20';
/**
 * Detail of a HPC Spot consumtion
 */
export interface HpcspotConsumption {
  /**
   * ID of the linked job on HPC Spot interface
   *
   */
  hpcspotItemId?: Number;
  /**
   * Reference of the item. This reference is linked with the type of the item
   *
   */
  reference?: HpcspotConsumptionReferenceEnum;
  /**
   * Date of the completion of the item consumption
   *
   */
  hpcspotItemEndDate?: Date;
  /**
   * Quantity consumed (minutes, core minutes, licences, token)
   *
   */
  quantity?: ComplexTypeUnitAndValue<Number>;
  /**
   * ID of the Order that billed this item. If null, this item has not been billed
   *
   */
  orderId?: Number;
  /**
   * Description of the ressource
   *
   */
  description?: string;
  /**
   * URL for the description of the consumption on the HPC Spot interface
   *
   */
  hpcspotUrl?: string;
  /**
   * ID of the detail
   *
   */
  id?: Number;
  /**
   * Type of consumption
   *
   */
  type?: HpcspotConsumptionTypeEnum;
}
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
type PathshpcspotGET = '/hpcspot/{serviceName}/consumption/{id}' | 
'/hpcspot/{serviceName}/consumption' | 
'/hpcspot/{serviceName}/serviceInfos' | 
'/hpcspot/{serviceName}' | 
'/hpcspot';

type PathshpcspotPUT = '/hpcspot/{serviceName}/serviceInfos';

class Apihpcspot extends ApiCommon {
  /**
  Detail of a HPC Spot consumtion
  Get this object properties
  **/
  public get(path: '/hpcspot/{serviceName}/consumption/{id}', pathParams: {serviceName?: string, id?: Number}, queryParams: null): Promise<HpcspotConsumption>;
  /**
  List the hpcspot.Consumption objects
  Details of the consumption of your account
  **/
  public get(path: '/hpcspot/{serviceName}/consumption', pathParams: {serviceName?: string}, queryParams: {'hpcspotItemEndDate.to'?: Date, hpcspotItemId?: Number, 'hpcspotItemEndDate.from'?: Date, orderId?: Number, type?: HpcspotConsumptionTypeEnum}): Promise<Number[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/hpcspot/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Account HPC Spot
  Get this object properties
  **/
  public get(path: '/hpcspot/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<HpcspotAccount>;
  /**
  Operations about the HPCSPOT service
  List available services
  **/
  public get(path: '/hpcspot', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathshpcspotGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/hpcspot/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathshpcspotPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
}

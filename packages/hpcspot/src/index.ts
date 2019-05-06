import { ApiCommon } from '@ovh-api/common';
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
 * Detail of a HPC Spot consumtion
 */
export interface HpcspotConsumption {
  /**
   * Description of the ressource
   *
   */
  description?: string;
  /**
   * Date of the completion of the item consumption
   *
   */
  hpcspotItemEndDate?: string;
  /**
   * ID of the linked job on HPC Spot interface
   *
   */
  hpcspotItemId?: Number;
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
   * ID of the Order that billed this item. If null, this item has not been billed
   *
   */
  orderId?: Number;
  /**
   * Quantity consumed (minutes, core minutes, licences, token)
   *
   */
  quantity?: ComplexTypeUnitAndValue<Number>;
  /**
   * Reference of the item. This reference is linked with the type of the item
   *
   */
  reference?: HpcspotConsumptionReferenceEnum;
  /**
   * Type of consumption
   *
   */
  type?: HpcspotConsumptionTypeEnum;
}
/**
 * All references a HPC Spot consumption can be in
 */
export type HpcspotConsumptionReferenceEnum = '12core.60gb.quadrok4000' | '16core.64gb' | '1core.4gb' | '1core.4gb.quadrok4000' | '2core.8gb' | '2core.8gb.quadrok4000' | '4core.15gb' | '4core.15gb.quadrok4000' | '4core.32gb' | '8core.30gb' | '8core.30gb.quadrok4000' | '8core.32gb.1teslak20';
/**
 * All types a HPC Spot consumption can be in
 */
export type HpcspotConsumptionTypeEnum = 'job' | 'reservation' | 'session';
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
type PathsHpcspotGET = '/hpcspot/{serviceName}' | 
'/hpcspot/{serviceName}/serviceInfos' | 
'/hpcspot/{serviceName}/consumption/{id}' | 
'/hpcspot/{serviceName}/consumption' | 
'/hpcspot';

type PathsHpcspotPUT = '/hpcspot/{serviceName}/serviceInfos';

export class ApiHpcspot extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Account HPC Spot
  Get this object properties
  **/
  public get(path: '/hpcspot/{serviceName}', pathParams: {serviceName: string}): Promise<HpcspotAccount>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/hpcspot/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Detail of a HPC Spot consumtion
  Get this object properties
  **/
  public get(path: '/hpcspot/{serviceName}/consumption/{id}', pathParams: {serviceName: string, id: Number}): Promise<HpcspotConsumption>;
  /**
  List the hpcspot.Consumption objects
  Details of the consumption of your account
  **/
  public get(path: '/hpcspot/{serviceName}/consumption', pathParams: {serviceName: string}, queryParams: {orderId?: Number, 'hpcspotItemEndDate.to'?: string, hpcspotItemId?: Number, 'hpcspotItemEndDate.from'?: string, type?: HpcspotConsumptionTypeEnum}): Promise<Number[]>;
  /**
  Operations about the HPCSPOT service
  List available services
  **/
  public get(path: '/hpcspot'): Promise<string[]>;
  public get(path: PathsHpcspotGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/hpcspot/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsHpcspotPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
}

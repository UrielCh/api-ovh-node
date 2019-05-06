import { ApiCommon } from '@ovh-api/common';
/**
 * Pack of SIP trunk services
 */
export interface PackSiptrunkPackSipTrunk {
  /**
   * Name of the SIP trunk pack
   *
   */
  packName?: string;
}
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
  contactBilling?: string;
  /**
   */
  engagedUpTo?: Date;
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
type PathspacksiptrunkGET = '/pack/siptrunk' | 
'/pack/siptrunk/{packName}' | 
'/pack/siptrunk/{packName}/serviceInfos';

type PathspacksiptrunkPUT = '/pack/siptrunk/{packName}/serviceInfos';

type PathspacksiptrunkPOST = '/pack/siptrunk/{packName}/changeContact';

class Apipacksiptrunk extends ApiCommon {
  /**
  Operations about the PACK service
  List available services
  **/
  public get(path: '/pack/siptrunk', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Pack of SIP trunk services
  Get this object properties
  **/
  public get(path: '/pack/siptrunk/{packName}', pathParams: {packName?: string}, queryParams: null): Promise<PackSiptrunkPackSipTrunk>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/pack/siptrunk/{packName}/serviceInfos', pathParams: {packName?: string}, queryParams: null): Promise<ServicesService>;
  public get(path: PathspacksiptrunkGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/pack/siptrunk/{packName}/serviceInfos', pathParams: {packName?: string}, bodyParams: null): Promise<void>;
  public put(path: PathspacksiptrunkPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/pack/siptrunk/{packName}/changeContact', pathParams: {packName?: string}, bodyParams: null): Promise<Number[]>;
  public post(path: PathspacksiptrunkPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

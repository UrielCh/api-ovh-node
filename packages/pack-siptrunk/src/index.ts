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
type PathsPackSiptrunkGET = '/pack/siptrunk' | 
'/pack/siptrunk/{packName}' | 
'/pack/siptrunk/{packName}/serviceInfos';

type PathsPackSiptrunkPUT = '/pack/siptrunk/{packName}/serviceInfos';

type PathsPackSiptrunkPOST = '/pack/siptrunk/{packName}/changeContact';

export class ApiPackSiptrunk extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the PACK service
  List available services
  **/
  public get(path: '/pack/siptrunk'): Promise<string[]>;
  /**
  Pack of SIP trunk services
  Get this object properties
  **/
  public get(path: '/pack/siptrunk/{packName}', pathParams: {packName: string}): Promise<PackSiptrunkPackSipTrunk>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/pack/siptrunk/{packName}/serviceInfos', pathParams: {packName: string}): Promise<ServicesService>;
  public get(path: PathsPackSiptrunkGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/pack/siptrunk/{packName}/serviceInfos', pathParams: {packName: string}): Promise<void>;
  public put(path: PathsPackSiptrunkPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/pack/siptrunk/{packName}/changeContact', pathParams: {packName: string}): Promise<Number[]>;
  public post(path: PathsPackSiptrunkPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}

import { ApiCommon } from '@ovh-api/common';
/**
 * AllDom administration
 */
export interface AllDomAllDom {
  /**
   * Offer of the allDom
   *
   */
  offer?: DomainOfferEnum;
  /**
   * Name of the allDom
   *
   */
  name?: string;
  /**
   * Type of the allDom
   *
   */
  type?: AllDomTypeEnum;
}
/**
 * Domain name of a allDom
 */
export interface AllDomAllDomDomain {
  /**
   * Domain name
   *
   */
  domain?: string;
}
/**
 * Type
 */
export type AllDomTypeEnum = 'french' | 'french+international' | 'international';
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
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
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Offer
 */
export type DomainOfferEnum = 'diamond' | 'gold' | 'platinum';
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
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
type PathsallDomGET = '/allDom/{serviceName}' | 
'/allDom/{serviceName}/domain/{domain}' | 
'/allDom/{serviceName}/domain' | 
'/allDom/{serviceName}/serviceInfos' | 
'/allDom';

type PathsallDomPUT = '/allDom/{serviceName}/serviceInfos';

class ApiallDom extends ApiCommon {
  /**
  AllDom administration
  Get this object properties
  **/
  public get(path: '/allDom/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<AllDomAllDom>;
  /**
  Domain name of a allDom
  Get this object properties
  **/
  public get(path: '/allDom/{serviceName}/domain/{domain}', pathParams: {serviceName?: string, domain?: string}, queryParams: null): Promise<AllDomAllDomDomain>;
  /**
  List the allDom.AllDomDomain objects
  Domains attached to this allDom
  **/
  public get(path: '/allDom/{serviceName}/domain', pathParams: {serviceName?: string}, queryParams: {domain?: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/allDom/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  Operations about the ALLDOM service
  List available services
  **/
  public get(path: '/allDom', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsallDomGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/allDom/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  public put(path: PathsallDomPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
}

import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * AllDom administration
 */
export interface AllDomAllDom {
  /**
   * Name of the allDom
   *
   */
  name?: string;
  /**
   * Offer of the allDom
   *
   */
  offer?: DomainOfferEnum;
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
 * Offer
 */
export type DomainOfferEnum = 'diamond' | 'gold' | 'platinum';
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
type PathsAllDomGET = '/allDom' | 
'/allDom/{serviceName}' | 
'/allDom/{serviceName}/domain' | 
'/allDom/{serviceName}/domain/{domain}' | 
'/allDom/{serviceName}/serviceInfos';

type PathsAllDomPUT = '/allDom/{serviceName}/serviceInfos';

export class ApiAllDom extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the ALLDOM service
  List available services
  **/
  public get(path: '/allDom'): Promise<string[]>;
  /**
  AllDom administration
  Get this object properties
  **/
  public get(path: '/allDom/{serviceName}', params: {serviceName: string}): Promise<AllDomAllDom>;
  /**
  List the allDom.AllDomDomain objects
  Domains attached to this allDom
  **/
  public get(path: '/allDom/{serviceName}/domain', params: {serviceName: string, domain?: string}): Promise<string[]>;
  /**
  Domain name of a allDom
  Get this object properties
  **/
  public get(path: '/allDom/{serviceName}/domain/{domain}', params: {serviceName: string, domain: string}): Promise<AllDomAllDomDomain>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/allDom/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  public get(path: PathsAllDomGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/allDom/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsAllDomPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
}

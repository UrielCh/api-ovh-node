import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace allDom {
    //allDom.AllDom
    // fullName: allDom.AllDom.AllDom
    export interface AllDom {
        name?: string;
        offer?: OVH.domain.OfferEnum;
        type?: OVH.allDom.TypeEnum;
    }
    //allDom.AllDomDomain
    // fullName: allDom.AllDomDomain.AllDomDomain
    export interface AllDomDomain {
        domain?: string;
    }
    //allDom.TypeEnum
    export type TypeEnum = "french" | "french+international" | "international"
}
export namespace domain {
    //domain.OfferEnum
    export type OfferEnum = "diamond" | "gold" | "platinum"
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /allDom
export interface AllDom {
    // GET /allDom
    GET(): Promise<string[]>;
    [keys: string]: {
        // GET /allDom/{serviceName}
        GET(): Promise<allDom.AllDom>;
        domain:  {
            // GET /allDom/{serviceName}/domain
            GET(param?: {domain?: string}): Promise<string[]>;
            [keys: string]: {
                // GET /allDom/{serviceName}/domain/{domain}
                GET(): Promise<allDom.AllDomDomain>;
            } | any
        }
        serviceInfos:  {
            // GET /allDom/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /allDom/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
    } | any
}
// Api
type PathsAllDomGET = '/allDom' |
  '/allDom/{serviceName}/domain/{domain}' |
  '/allDom/{serviceName}/domain' |
  '/allDom/{serviceName}' |
  '/allDom/{serviceName}/serviceInfos';

type PathsAllDomPUT = '/allDom/{serviceName}/serviceInfos';

export class ApiAllDom extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the ALLDOM service
   * List available services
   */
  public get(path: '/allDom'): Promise<string[]>;
  /**
   * AllDom administration
   * Get this object properties
   */
  public get(path: '/allDom/{serviceName}', params: {serviceName: string}): Promise<allDom.AllDom>;
  /**
   * List the allDom.AllDomDomain objects
   * Domains attached to this allDom
   */
  public get(path: '/allDom/{serviceName}/domain', params: {serviceName: string, domain?: string}): Promise<string[]>;
  /**
   * Domain name of a allDom
   * Get this object properties
   */
  public get(path: '/allDom/{serviceName}/domain/{domain}', params: {serviceName: string, domain: string}): Promise<allDom.AllDomDomain>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/allDom/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  public get(path: PathsAllDomGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/allDom/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsAllDomPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
}
}
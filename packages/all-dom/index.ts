import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /allDom Models
 */
export namespace allDom {
    // interface fullName: allDom.AllDom.AllDom
    export interface AllDom {
        name: string;
        offer: domain.OfferEnum;
        type: allDom.TypeEnum;
    }
    // interface fullName: allDom.AllDomDomain.AllDomDomain
    export interface AllDomDomain {
        domain: string;
    }
    // type fullname: allDom.TypeEnum
    export type TypeEnum = "french" | "french+international" | "international"
}
export namespace domain {
    // type fullname: domain.OfferEnum
    export type OfferEnum = "diamond" | "gold" | "platinum"
}
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /allDom Models
 */
export function proxyAllDom(ovhEngine: OvhRequestable): AllDom {
    return buildOvhProxy(ovhEngine, '/allDom');
}
export default proxyAllDom;
/**
 * Api Proxy model
 */// Apis harmony
// path /allDom
export interface AllDom{
    // GET /allDom
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /allDom/{serviceName}
        $get(): Promise<allDom.AllDom>;
        domain: {
            // GET /allDom/{serviceName}/domain
            $get(params?: {domain?: string}): Promise<string[]>;
            $(domain: string): {
                // GET /allDom/{serviceName}/domain/{domain}
                $get(): Promise<allDom.AllDomDomain>;
            };
        }
        serviceInfos: {
            // GET /allDom/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /allDom/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
    };
// Api
  /**
   * Operations about the ALLDOM service
   * List available services
   */
  get(path: '/allDom'): () => Promise<string[]>;
  /**
   * AllDom administration
   * Get this object properties
   */
  get(path: '/allDom/{serviceName}'): (params: {serviceName: string}) => Promise<allDom.AllDom>;
  /**
   * List the allDom.AllDomDomain objects
   * Domains attached to this allDom
   */
  get(path: '/allDom/{serviceName}/domain'): (params: {serviceName: string, domain?: string}) => Promise<string[]>;
  /**
   * Domain name of a allDom
   * Get this object properties
   */
  get(path: '/allDom/{serviceName}/domain/{domain}'): (params: {domain: string, serviceName: string}) => Promise<allDom.AllDomDomain>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/allDom/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/allDom/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
}
/**
 * classic Model
 */
import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /vip Models
 */
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
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
export namespace vip {
    //vip.SupportVip
    // fullName: vip.SupportVip.SupportVip
    export interface SupportVip {
        serviceName: string;
        universe: vip.UniverseEnum[];
    }
    //vip.UniverseEnum
    export type UniverseEnum = "cloud" | "dedicated" | "telecom" | "web"
}

/**
 * END API /vip Models
 */
export function proxyVip(ovhEngine: OvhRequestable): Vip {
    return buildOvhProxy(ovhEngine, '/vip');
}
export default proxyVip;
/**
 * Api Proxy model
 */// Apis harmony
// path /vip
export interface Vip{
    // GET /vip
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /vip/{serviceName}
        $get(): Promise<vip.SupportVip>;
        serviceInfos: {
            // GET /vip/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /vip/{serviceName}/serviceInfos
            $put(body?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
    };
// Api
  /**
   * Operations about the SUPPORT_PLUS service
   * List available services
   */
  get(path: '/vip'): () => Promise<string[]>;
  /**
   * Vip Service
   * Get this object properties
   */
  get(path: '/vip/{serviceName}'): (params: {serviceName: string}) => Promise<vip.SupportVip>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/vip/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/vip/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
}
/**
 * classic Model
 */
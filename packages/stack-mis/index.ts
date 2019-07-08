import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /stack/mis Models
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
export namespace stack {
    //stack.StackTypeEnum
    export type StackTypeEnum = "MDS" | "MIS" | "MOS"
    export namespace mis {
        //stack.mis.product
        // fullName: stack.mis.product.product
        export interface product {
            domain: string;
            type: stack.StackTypeEnum;
        }
    }
}

/**
 * END API /stack/mis Models
 */
export function proxyStackMis(ovhEngine: OvhRequestable): Stack {
    return buildOvhProxy(ovhEngine, '/stack');
}
export default proxyStackMis;
/**
 * Api Proxy model
 */// Apis harmony
// path /stack
export interface Stack{
    mis: {
        // GET /stack/mis
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /stack/mis/{serviceName}
            $get(): Promise<stack.mis.product>;
            serviceInfos: {
                // GET /stack/mis/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /stack/mis/{serviceName}/serviceInfos
                $put(body?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
// Api
  /**
   * Operations about the GS service
   * List available services
   */
  get(path: '/stack/mis'): () => Promise<string[]>;
  /**
   * Stack MIS
   * Get this object properties
   */
  get(path: '/stack/mis/{serviceName}'): (params: {serviceName: string}) => Promise<stack.mis.product>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/stack/mis/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/stack/mis/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
}
/**
 * classic Model
 */
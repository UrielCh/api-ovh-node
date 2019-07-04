import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
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
export namespace stack {
    //stack.StackTypeEnum
    export type StackTypeEnum = "MDS" | "MIS" | "MOS"
    export namespace mis {
        //stack.mis.product
        // fullName: stack.mis.product.product
        export interface product {
            domain?: string;
            type?: OVH.stack.StackTypeEnum;
        }
    }
}
// Apis harmony
// path /stack
export interface Stack {
    mis:  {
        // GET /stack/mis
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /stack/mis/{serviceName}
            GET(): Promise<stack.mis.product>;
            serviceInfos:  {
                // GET /stack/mis/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /stack/mis/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
}
// Api
type PathsStackMisGET = '/stack/mis' |
  '/stack/mis/{serviceName}/serviceInfos' |
  '/stack/mis/{serviceName}';

type PathsStackMisPUT = '/stack/mis/{serviceName}/serviceInfos';

export class ApiStackMis extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the GS service
   * List available services
   */
  public get(path: '/stack/mis'): Promise<string[]>;
  /**
   * Stack MIS
   * Get this object properties
   */
  public get(path: '/stack/mis/{serviceName}', params: {serviceName: string}): Promise<stack.mis.product>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/stack/mis/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  public get(path: PathsStackMisGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/stack/mis/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsStackMisPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
}
}
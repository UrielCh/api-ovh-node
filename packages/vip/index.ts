import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

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
// Apis harmony
// path /vip
export interface Vip{
    // GET /vip
    $get(): Promise<string[]>;
    [keys: string]:{
        // GET /vip/{serviceName}
        $get(): Promise<vip.SupportVip>;
        serviceInfos: {
            // GET /vip/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /vip/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
    } | any
}
// Api
type PathsVipGET = '/vip' |
  '/vip/{serviceName}' |
  '/vip/{serviceName}/serviceInfos';

type PathsVipPUT = '/vip/{serviceName}/serviceInfos';

export class ApiVip extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the SUPPORT_PLUS service
   * List available services
   */
  public get(path: '/vip'): Promise<string[]>;
  /**
   * Vip Service
   * Get this object properties
   */
  public get(path: '/vip/{serviceName}', params: {serviceName: string}): Promise<vip.SupportVip>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/vip/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  public get(path: PathsVipGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/vip/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsVipPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
}

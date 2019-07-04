import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace hpcspot {
    //hpcspot.Account
    // fullName: hpcspot.Account.Account
    export interface Account {
        name?: string;
    }
    //hpcspot.Consumption
    // fullName: hpcspot.Consumption.Consumption
    export interface Consumption {
        description?: string;
        hpcspotItemEndDate?: string;
        hpcspotItemId?: number;
        hpcspotUrl?: string;
        id?: number;
        orderId?: number;
        quantity?: OVH.complexType.UnitAndValue<number>;
        reference?: OVH.hpcspot.ConsumptionReferenceEnum;
        type?: OVH.hpcspot.ConsumptionTypeEnum;
    }
    //hpcspot.ConsumptionReferenceEnum
    export type ConsumptionReferenceEnum = "12core.60gb.quadrok4000" | "16core.64gb" | "1core.4gb" | "1core.4gb.quadrok4000" | "2core.8gb" | "2core.8gb.quadrok4000" | "4core.15gb" | "4core.15gb.quadrok4000" | "4core.32gb" | "8core.30gb" | "8core.30gb.quadrok4000" | "8core.32gb.1teslak20"
    //hpcspot.ConsumptionTypeEnum
    export type ConsumptionTypeEnum = "job" | "reservation" | "session"
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
// path /hpcspot
export interface Hpcspot {
    // GET /hpcspot
    $get(): Promise<string[]>;
    [keys: string]: {
        // GET /hpcspot/{serviceName}
        $get(): Promise<hpcspot.Account>;
        consumption:  {
            // GET /hpcspot/{serviceName}/consumption
            $get(param?: {hpcspotItemEndDate_to?: string, hpcspotItemId?: number, orderId?: number, hpcspotItemEndDate_from?: string, type?: hpcspot.ConsumptionTypeEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /hpcspot/{serviceName}/consumption/{id}
                $get(): Promise<hpcspot.Consumption>;
            } | any
        }
        serviceInfos:  {
            // GET /hpcspot/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /hpcspot/{serviceName}/serviceInfos
            $put(body?: {body: services.Service}): Promise<void>;
        }
    } | any
}
// Api
type PathsHpcspotGET = '/hpcspot/{serviceName}' |
  '/hpcspot/{serviceName}/consumption/{id}' |
  '/hpcspot/{serviceName}/consumption' |
  '/hpcspot/{serviceName}/serviceInfos' |
  '/hpcspot';

type PathsHpcspotPUT = '/hpcspot/{serviceName}/serviceInfos';

export class ApiHpcspot extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the HPCSPOT service
   * List available services
   */
  public get(path: '/hpcspot'): Promise<string[]>;
  /**
   * Account HPC Spot
   * Get this object properties
   */
  public get(path: '/hpcspot/{serviceName}', params: {serviceName: string}): Promise<hpcspot.Account>;
  /**
   * List the hpcspot.Consumption objects
   * Details of the consumption of your account
   */
  public get(path: '/hpcspot/{serviceName}/consumption', params: {serviceName: string, hpcspotItemEndDate_from?: string, hpcspotItemEndDate_to?: string, hpcspotItemId?: number, orderId?: number, type?: OVH.hpcspot.ConsumptionTypeEnum}): Promise<number[]>;
  /**
   * Detail of a HPC Spot consumtion
   * Get this object properties
   */
  public get(path: '/hpcspot/{serviceName}/consumption/{id}', params: {serviceName: string, id: string}): Promise<hpcspot.Consumption>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/hpcspot/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  public get(path: PathsHpcspotGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/hpcspot/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsHpcspotPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
}
}
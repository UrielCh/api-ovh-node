import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /hpcspot Models
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace hpcspot {
    // interface fullName: hpcspot.Account.Account
    export interface Account {
        name: string;
    }
    // interface fullName: hpcspot.Consumption.Consumption
    export interface Consumption {
        description?: string;
        hpcspotItemEndDate: string;
        hpcspotItemId: number;
        hpcspotUrl?: string;
        id: number;
        orderId?: number;
        quantity: complexType.UnitAndValue<number>;
        reference: hpcspot.ConsumptionReferenceEnum;
        type: hpcspot.ConsumptionTypeEnum;
    }
    // type fullname: hpcspot.ConsumptionReferenceEnum
    export type ConsumptionReferenceEnum = "12core.60gb.quadrok4000" | "16core.64gb" | "1core.4gb" | "1core.4gb.quadrok4000" | "2core.8gb" | "2core.8gb.quadrok4000" | "4core.15gb" | "4core.15gb.quadrok4000" | "4core.32gb" | "8core.30gb" | "8core.30gb.quadrok4000" | "8core.32gb.1teslak20"
    // type fullname: hpcspot.ConsumptionTypeEnum
    export type ConsumptionTypeEnum = "job" | "reservation" | "session"
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
 * END API /hpcspot Models
 */
export function proxyHpcspot(ovhEngine: OvhRequestable): Hpcspot {
    return buildOvhProxy(ovhEngine, '/hpcspot');
}
export default proxyHpcspot;
/**
 * Api Proxy model
 */// Apis harmony
// path /hpcspot
export interface Hpcspot{
    // GET /hpcspot
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /hpcspot/{serviceName}
        $get(): Promise<hpcspot.Account>;
        consumption: {
            // GET /hpcspot/{serviceName}/consumption
            $get(params?: {hpcspotItemEndDate_from?: string, hpcspotItemEndDate_to?: string, hpcspotItemId?: number, orderId?: number, type?: hpcspot.ConsumptionTypeEnum}): Promise<number[]>;
            $(id: number): {
                // GET /hpcspot/{serviceName}/consumption/{id}
                $get(): Promise<hpcspot.Consumption>;
            };
        }
        serviceInfos: {
            // GET /hpcspot/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /hpcspot/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
    };
// Api
  /**
   * Operations about the HPCSPOT service
   * List available services
   */
  get(path: '/hpcspot'): () => Promise<string[]>;
  /**
   * Account HPC Spot
   * Get this object properties
   */
  get(path: '/hpcspot/{serviceName}'): (params: {serviceName: string}) => Promise<hpcspot.Account>;
  /**
   * List the hpcspot.Consumption objects
   * Details of the consumption of your account
   */
  get(path: '/hpcspot/{serviceName}/consumption'): (params: {serviceName: string, hpcspotItemEndDate_from?: string, hpcspotItemEndDate_to?: string, hpcspotItemId?: number, orderId?: number, type?: hpcspot.ConsumptionTypeEnum}) => Promise<number[]>;
  /**
   * Detail of a HPC Spot consumtion
   * Get this object properties
   */
  get(path: '/hpcspot/{serviceName}/consumption/{id}'): (params: {id: number, serviceName: string}) => Promise<hpcspot.Consumption>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/hpcspot/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/hpcspot/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
}

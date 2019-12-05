import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dbaas/timeseries Models
 */
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
export namespace timeseries {
    // interface fullName: timeseries.Project.Project
    export interface Project {
        description?: string;
        displayName?: string;
        offerId?: string;
        regionId?: string;
        serviceName: string;
        status?: timeseries.StatusTypeEnum;
    }
    // type fullname: timeseries.StatusTypeEnum
    export type StatusTypeEnum = "ACTIVE" | "CREATION" | "DELETED" | "UNCONFIGURED"
}

/**
 * END API /dbaas/timeseries Models
 */
export function proxyDbaasTimeseries(ovhEngine: OvhRequestable): Dbaas {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
export default proxyDbaasTimeseries;
/**
 * Api Proxy model
 */// Apis harmony
// path /dbaas
export interface Dbaas{
    timeseries: {
        // GET /dbaas/timeseries
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /dbaas/timeseries/{serviceName}
            $get(): Promise<timeseries.Project>;
            // PUT /dbaas/timeseries/{serviceName}
            $put(params?: {description?: string, displayName?: string, offerId?: string, regionId?: string, serviceName?: string, status?: timeseries.StatusTypeEnum}): Promise<void>;
            serviceInfos: {
                // GET /dbaas/timeseries/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dbaas/timeseries/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
// Api
  /**
   * Operations about the PAAS_TIMESERIES service
   * List available services
   */
  get(path: '/dbaas/timeseries'): () => Promise<string[]>;
  /**
   * Timeseries project
   * Get this object properties
   */
  get(path: '/dbaas/timeseries/{serviceName}'): (params: {serviceName: string}) => Promise<timeseries.Project>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dbaas/timeseries/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Timeseries project
   * Alter this object properties
   */
  put(path: '/dbaas/timeseries/{serviceName}'): (params: {serviceName: string, description?: string, displayName?: string, offerId?: string, regionId?: string, status?: timeseries.StatusTypeEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dbaas/timeseries/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
}

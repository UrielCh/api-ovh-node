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
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
}
export namespace paas {
    export namespace timeseries {
        //paas.timeseries.Consumption
        // fullName: paas.timeseries.Consumption.Consumption
        export interface Consumption {
            from?: string;
            generated?: string;
            items?: OVH.paas.timeseries.ConsumptionItem[];
            to?: string;
            total?: OVH.order.Price;
        }
        //paas.timeseries.ConsumptionItem
        // fullName: paas.timeseries.ConsumptionItem.ConsumptionItem
        export interface ConsumptionItem {
            metricName?: OVH.tsaas.MetricNameEnum;
            price?: OVH.order.Price;
            quantity?: OVH.complexType.UnitAndValue<number>;
            unitPrice?: OVH.order.Price;
        }
        //paas.timeseries.Key
        // fullName: paas.timeseries.Key.Key
        export interface Key {
            description?: string;
            id?: string;
            permissions?: OVH.tsaas.PermissionEnum[];
            secret?: string;
            tags?: OVH.paas.timeseries.Tag[];
        }
        //paas.timeseries.Project
        // fullName: paas.timeseries.Project.Project
        export interface Project {
            description?: string;
            displayName?: string;
            region?: OVH.paas.timeseries.Region;
            serviceName?: string;
        }
        //paas.timeseries.Quota
        // fullName: paas.timeseries.Quota.Quota
        export interface Quota {
            current?: number;
            max?: number;
            type?: OVH.tsaas.QuotaTypeEnum;
        }
        //paas.timeseries.Region
        // fullName: paas.timeseries.Region.Region
        export interface Region {
            displayName?: string;
            id?: string;
            url?: string;
        }
        //paas.timeseries.Tag
        // fullName: paas.timeseries.Tag.Tag
        export interface Tag {
            key?: string;
            value?: string;
        }
    }
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
export namespace timeseries {
    //timeseries.Project
    // fullName: timeseries.Project.Project
    export interface Project {
        description?: string;
        displayName?: string;
        offerId?: string;
        regionId?: string;
        serviceName?: string;
        status?: OVH.timeseries.StatusTypeEnum;
    }
    //timeseries.StatusTypeEnum
    export type StatusTypeEnum = "ACTIVE" | "CREATION" | "DELETED" | "UNCONFIGURED"
}
export namespace tsaas {
    //tsaas.MetricNameEnum
    export type MetricNameEnum = "storage" | "input" | "output"
    //tsaas.PermissionEnum
    export type PermissionEnum = "READ" | "WRITE"
    //tsaas.QuotaTypeEnum
    export type QuotaTypeEnum = "ddp" | "mads"
}
// Apis harmony
// path /paas
export interface Paas {
    timeseries:  {
        // GET /paas/timeseries
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /paas/timeseries/{serviceName}
            GET(): Promise<timeseries.Project>;
            // PUT /paas/timeseries/{serviceName}
            PUT(body?: {body: timeseries.Project}): Promise<void>;
            key:  {
                // GET /paas/timeseries/{serviceName}/key
                GET(): Promise<paas.timeseries.Key[]>;
                // POST /paas/timeseries/{serviceName}/key
                POST(body?: {description?: string, permissions: string[], tags: paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
                [keys: string]: {
                    // GET /paas/timeseries/{serviceName}/key/{keyId}
                    GET(): Promise<paas.timeseries.Key>;
                    // PUT /paas/timeseries/{serviceName}/key/{keyId}
                    PUT(body?: {description?: string, permissions: tsaas.PermissionEnum[], tags: paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
                    // DELETE /paas/timeseries/{serviceName}/key/{keyId}
                    DELETE(): Promise<boolean>;
                } | any
            }
            serviceInfos:  {
                // GET /paas/timeseries/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /paas/timeseries/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            setup:  {
                // POST /paas/timeseries/{serviceName}/setup
                POST(body?: {displayName: string, description?: string, regionId?: string, raTokenId?: string, raTokenKey?: string}): Promise<paas.timeseries.Project>;
            }
            quota:  {
                // GET /paas/timeseries/{serviceName}/quota
                GET(): Promise<paas.timeseries.Quota[]>;
            }
            consumption:  {
                // GET /paas/timeseries/{serviceName}/consumption
                GET(): Promise<paas.timeseries.Consumption[]>;
            }
            changeContact:  {
                // POST /paas/timeseries/{serviceName}/changeContact
                POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
            }
        } | any
        region:  {
            // GET /paas/timeseries/region
            GET(): Promise<paas.timeseries.Region[]>;
        }
    }
}
// Api
type PathsPaasTimeseriesGET = '/paas/timeseries' |
  '/paas/timeseries/{serviceName}/key/{keyId}' |
  '/paas/timeseries/{serviceName}/key' |
  '/paas/timeseries/{serviceName}' |
  '/paas/timeseries/{serviceName}/serviceInfos' |
  '/paas/timeseries/{serviceName}/quota' |
  '/paas/timeseries/{serviceName}/consumption' |
  '/paas/timeseries/region';

type PathsPaasTimeseriesPUT = '/paas/timeseries/{serviceName}/key/{keyId}' |
  '/paas/timeseries/{serviceName}' |
  '/paas/timeseries/{serviceName}/serviceInfos';

type PathsPaasTimeseriesPOST = '/paas/timeseries/{serviceName}/key' |
  '/paas/timeseries/{serviceName}/setup' |
  '/paas/timeseries/{serviceName}/changeContact';

type PathsPaasTimeseriesDELETE = '/paas/timeseries/{serviceName}/key/{keyId}';

export class ApiPaasTimeseries extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the PAAS_TIMESERIES service
   * List available services
   */
  public get(path: '/paas/timeseries'): Promise<string[]>;
  /**
   * Timeseries project
   * Get this object properties
   */
  public get(path: '/paas/timeseries/{serviceName}', params: {serviceName: string}): Promise<timeseries.Project>;
  /**
   * Consumption
   * Get consumption
   */
  public get(path: '/paas/timeseries/{serviceName}/consumption', params: {serviceName: string}): Promise<paas.timeseries.Consumption[]>;
  /**
   * Keys
   * Get keys for a project
   */
  public get(path: '/paas/timeseries/{serviceName}/key', params: {serviceName: string}): Promise<paas.timeseries.Key[]>;
  /**
   * Key
   * Get a key
   */
  public get(path: '/paas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string}): Promise<paas.timeseries.Key>;
  /**
   * Quotas
   * Get quotas
   */
  public get(path: '/paas/timeseries/{serviceName}/quota', params: {serviceName: string}): Promise<paas.timeseries.Quota[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/paas/timeseries/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Regions
   * Get available regions
   */
  public get(path: '/paas/timeseries/region'): Promise<paas.timeseries.Region[]>;
  public get(path: PathsPaasTimeseriesGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Timeseries project
   * Alter this object properties
   */
  public put(path: '/paas/timeseries/{serviceName}', params: {serviceName: string, description?: string, displayName?: string, offerId?: string, regionId?: string, status?: OVH.timeseries.StatusTypeEnum}): Promise<void>;
  /**
   * Key
   * Create a key
   */
  public put(path: '/paas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string, description?: string, permissions: OVH.tsaas.PermissionEnum[], tags: OVH.paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/paas/timeseries/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsPaasTimeseriesPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/paas/timeseries/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Keys
   * Create a key for a project
   */
  public post(path: '/paas/timeseries/{serviceName}/key', params: {serviceName: string, description?: string, permissions: string[], tags: OVH.paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
  /**
   * Setup your project on our platform
   * Setup a project
   */
  public post(path: '/paas/timeseries/{serviceName}/setup', params: {serviceName: string, description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string}): Promise<paas.timeseries.Project>;
  public post(path: PathsPaasTimeseriesPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Key
   * Delete a OpenTSDB token
   */
  public delete(path: '/paas/timeseries/{serviceName}/key/{keyId}', params: {serviceName: string, keyId: string}): Promise<boolean>;
  public delete(path: PathsPaasTimeseriesDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
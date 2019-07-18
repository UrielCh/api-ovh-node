import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /paas/timeseries Models
 */
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace paas {
    export namespace timeseries {
        //paas.timeseries.Consumption
        // fullName: paas.timeseries.Consumption.Consumption
        export interface Consumption {
            from: string;
            generated: string;
            items: paas.timeseries.ConsumptionItem[];
            to: string;
            total: orderPrice;
        }
        //paas.timeseries.ConsumptionItem
        // fullName: paas.timeseries.ConsumptionItem.ConsumptionItem
        export interface ConsumptionItem {
            metricName: tsaas.MetricNameEnum;
            price: orderPrice;
            quantity: complexType.UnitAndValue<number>;
            unitPrice: orderPrice;
        }
        //paas.timeseries.Key
        // fullName: paas.timeseries.Key.Key
        export interface Key {
            description: string;
            id: string;
            permissions: tsaas.PermissionEnum[];
            secret: string;
            tags: paas.timeseries.Tag[];
        }
        //paas.timeseries.Project
        // fullName: paas.timeseries.Project.Project
        export interface Project {
            description?: string;
            displayName: string;
            region: paas.timeseries.Region;
            serviceName: string;
        }
        //paas.timeseries.Quota
        // fullName: paas.timeseries.Quota.Quota
        export interface Quota {
            current: number;
            max: number;
            type: tsaas.QuotaTypeEnum;
        }
        //paas.timeseries.Region
        // fullName: paas.timeseries.Region.Region
        export interface Region {
            displayName: string;
            id: string;
            url: string;
        }
        //paas.timeseries.Tag
        // fullName: paas.timeseries.Tag.Tag
        export interface Tag {
            key: string;
            value: string;
        }
    }
}
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
export namespace timeseries {
    //timeseries.Project
    // fullName: timeseries.Project.Project
    export interface Project {
        description?: string;
        displayName?: string;
        offerId?: string;
        regionId?: string;
        serviceName: string;
        status?: timeseries.StatusTypeEnum;
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

/**
 * END API /paas/timeseries Models
 */
export function proxyPaasTimeseries(ovhEngine: OvhRequestable): Paas {
    return buildOvhProxy(ovhEngine, '/paas');
}
export default proxyPaasTimeseries;
/**
 * Api Proxy model
 */// Apis harmony
// path /paas
export interface Paas{
    timeseries: {
        // GET /paas/timeseries
        $get(): Promise<string[]>;
        region: {
            // GET /paas/timeseries/region
            $get(): Promise<paas.timeseries.Region[]>;
        }
        $(serviceName: string): {
            // GET /paas/timeseries/{serviceName}
            $get(): Promise<timeseries.Project>;
            // PUT /paas/timeseries/{serviceName}
            $put(params?: {description?: string, displayName?: string, offerId?: string, regionId?: string, serviceName?: string, status?: timeseries.StatusTypeEnum}): Promise<void>;
            changeContact: {
                // POST /paas/timeseries/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            consumption: {
                // GET /paas/timeseries/{serviceName}/consumption
                $get(): Promise<paas.timeseries.Consumption[]>;
            }
            key: {
                // GET /paas/timeseries/{serviceName}/key
                $get(): Promise<paas.timeseries.Key[]>;
                // POST /paas/timeseries/{serviceName}/key
                $post(params: {description?: string, permissions: string[], tags: paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
                $(keyId: string): {
                    // DELETE /paas/timeseries/{serviceName}/key/{keyId}
                    $delete(): Promise<boolean>;
                    // GET /paas/timeseries/{serviceName}/key/{keyId}
                    $get(): Promise<paas.timeseries.Key>;
                    // PUT /paas/timeseries/{serviceName}/key/{keyId}
                    $put(params: {description?: string, permissions: tsaas.PermissionEnum[], tags: paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
                };
            }
            quota: {
                // GET /paas/timeseries/{serviceName}/quota
                $get(): Promise<paas.timeseries.Quota[]>;
            }
            serviceInfos: {
                // GET /paas/timeseries/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /paas/timeseries/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            setup: {
                // POST /paas/timeseries/{serviceName}/setup
                $post(params: {description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string}): Promise<paas.timeseries.Project>;
            }
        };
    }
// Api
  /**
   * Operations about the PAAS_TIMESERIES service
   * List available services
   */
  get(path: '/paas/timeseries'): () => Promise<string[]>;
  /**
   * Timeseries project
   * Get this object properties
   */
  get(path: '/paas/timeseries/{serviceName}'): (params: {serviceName: string}) => Promise<timeseries.Project>;
  /**
   * Consumption
   * Get consumption
   */
  get(path: '/paas/timeseries/{serviceName}/consumption'): (params: {serviceName: string}) => Promise<paas.timeseries.Consumption[]>;
  /**
   * Keys
   * Get keys for a project
   */
  get(path: '/paas/timeseries/{serviceName}/key'): (params: {serviceName: string}) => Promise<paas.timeseries.Key[]>;
  /**
   * Key
   * Get a key
   */
  get(path: '/paas/timeseries/{serviceName}/key/{keyId}'): (params: {keyId: string, serviceName: string}) => Promise<paas.timeseries.Key>;
  /**
   * Quotas
   * Get quotas
   */
  get(path: '/paas/timeseries/{serviceName}/quota'): (params: {serviceName: string}) => Promise<paas.timeseries.Quota[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/paas/timeseries/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Regions
   * Get available regions
   */
  get(path: '/paas/timeseries/region'): () => Promise<paas.timeseries.Region[]>;
  /**
   * Timeseries project
   * Alter this object properties
   */
  put(path: '/paas/timeseries/{serviceName}'): (params: {serviceName: string, description?: string, displayName?: string, offerId?: string, regionId?: string, status?: timeseries.StatusTypeEnum}) => Promise<void>;
  /**
   * Key
   * Create a key
   */
  put(path: '/paas/timeseries/{serviceName}/key/{keyId}'): (params: {keyId: string, serviceName: string, description?: string, permissions: tsaas.PermissionEnum[], tags: paas.timeseries.Tag[]}) => Promise<paas.timeseries.Key>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/paas/timeseries/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/paas/timeseries/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Keys
   * Create a key for a project
   */
  post(path: '/paas/timeseries/{serviceName}/key'): (params: {serviceName: string, description?: string, permissions: string[], tags: paas.timeseries.Tag[]}) => Promise<paas.timeseries.Key>;
  /**
   * Setup your project on our platform
   * Setup a project
   */
  post(path: '/paas/timeseries/{serviceName}/setup'): (params: {serviceName: string, description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string}) => Promise<paas.timeseries.Project>;
  /**
   * Key
   * Delete a OpenTSDB token
   */
  delete(path: '/paas/timeseries/{serviceName}/key/{keyId}'): (params: {keyId: string, serviceName: string}) => Promise<boolean>;
}
/**
 * classic Model
 */type orderPrice = order.Price;

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dbaas/timeseries Models
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
    //tsaas.OpenTSDBToken
    // fullName: tsaas.OpenTSDBToken.OpenTSDBToken
    export interface OpenTSDBToken {
        description: string;
        id: string;
        permission: string;
        protocol: string;
        secret: string;
        tags: paas.timeseries.Tag[];
    }
    //tsaas.PermissionEnum
    export type PermissionEnum = "READ" | "WRITE"
    //tsaas.QuotaTypeEnum
    export type QuotaTypeEnum = "ddp" | "mads"
    //tsaas.Warp10Token
    // fullName: tsaas.Warp10Token.Warp10Token
    export interface Warp10Token {
        description: string;
        expiryTimestamp: string;
        id: string;
        maxFetch: number;
        maxGts: number;
        maxOps: number;
        permissions: string;
        protocol: string;
        queryToken: string;
        secret: string;
    }
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
        region: {
            // GET /dbaas/timeseries/region
            $get(): Promise<paas.timeseries.Region[]>;
        }
        $(serviceName: string): {
            // GET /dbaas/timeseries/{serviceName}
            $get(): Promise<timeseries.Project>;
            // PUT /dbaas/timeseries/{serviceName}
            $put(params?: {description?: string, displayName?: string, offerId?: string, regionId?: string, serviceName?: string, status?: timeseries.StatusTypeEnum}): Promise<void>;
            changeContact: {
                // POST /dbaas/timeseries/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            consumption: {
                // GET /dbaas/timeseries/{serviceName}/consumption
                $get(): Promise<paas.timeseries.Consumption[]>;
            }
            key: {
                // GET /dbaas/timeseries/{serviceName}/key
                $get(): Promise<paas.timeseries.Key[]>;
                // POST /dbaas/timeseries/{serviceName}/key
                $post(params?: {description?: string, permissions: string[], tags: paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
                $(keyId: string): {
                    // DELETE /dbaas/timeseries/{serviceName}/key/{keyId}
                    $delete(): Promise<boolean>;
                    // GET /dbaas/timeseries/{serviceName}/key/{keyId}
                    $get(): Promise<paas.timeseries.Key>;
                    // PUT /dbaas/timeseries/{serviceName}/key/{keyId}
                    $put(params?: {description?: string, permissions: tsaas.PermissionEnum[], tags: paas.timeseries.Tag[]}): Promise<paas.timeseries.Key>;
                };
            }
            quota: {
                // GET /dbaas/timeseries/{serviceName}/quota
                $get(): Promise<paas.timeseries.Quota[]>;
            }
            serviceInfos: {
                // GET /dbaas/timeseries/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dbaas/timeseries/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            setup: {
                // POST /dbaas/timeseries/{serviceName}/setup
                $post(params?: {description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string}): Promise<paas.timeseries.Project>;
            }
            token: {
                opentsdb: {
                    // GET /dbaas/timeseries/{serviceName}/token/opentsdb
                    $get(): Promise<tsaas.OpenTSDBToken[]>;
                    // POST /dbaas/timeseries/{serviceName}/token/opentsdb
                    $post(params?: {description?: string, permission: string, tags: paas.timeseries.Tag[]}): Promise<tsaas.OpenTSDBToken>;
                    $(tokenId: string): {
                        // DELETE /dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}
                        $delete(): Promise<boolean>;
                        // GET /dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}
                        $get(): Promise<tsaas.OpenTSDBToken>;
                    };
                }
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
   * Consumption
   * Get consumption
   */
  get(path: '/dbaas/timeseries/{serviceName}/consumption'): (params: {serviceName: string}) => Promise<paas.timeseries.Consumption[]>;
  /**
   * Keys
   * Get keys for a project
   */
  get(path: '/dbaas/timeseries/{serviceName}/key'): (params: {serviceName: string}) => Promise<paas.timeseries.Key[]>;
  /**
   * Key
   * Get a key
   */
  get(path: '/dbaas/timeseries/{serviceName}/key/{keyId}'): (params: {keyId: string, serviceName: string}) => Promise<paas.timeseries.Key>;
  /**
   * Quotas
   * Get quotas
   */
  get(path: '/dbaas/timeseries/{serviceName}/quota'): (params: {serviceName: string}) => Promise<paas.timeseries.Quota[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dbaas/timeseries/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * OpenTSDBTokens
   * Get OpenTSDB tokens
   */
  get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb'): (params: {serviceName: string}) => Promise<tsaas.OpenTSDBToken[]>;
  /**
   * Key
   * Get a OpenTSDB token
   */
  get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}'): (params: {serviceName: string, tokenId: string}) => Promise<tsaas.OpenTSDBToken>;
  /**
   * Regions
   * Get available regions
   */
  get(path: '/dbaas/timeseries/region'): () => Promise<paas.timeseries.Region[]>;
  /**
   * Timeseries project
   * Alter this object properties
   */
  put(path: '/dbaas/timeseries/{serviceName}'): (params: {serviceName: string, description?: string, displayName?: string, offerId?: string, regionId?: string, status?: timeseries.StatusTypeEnum}) => Promise<void>;
  /**
   * Key
   * Create a key
   */
  put(path: '/dbaas/timeseries/{serviceName}/key/{keyId}'): (params: {keyId: string, serviceName: string, description?: string, permissions: tsaas.PermissionEnum[], tags: paas.timeseries.Tag[]}) => Promise<paas.timeseries.Key>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dbaas/timeseries/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/dbaas/timeseries/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Keys
   * Create a key for a project
   */
  post(path: '/dbaas/timeseries/{serviceName}/key'): (params: {serviceName: string, description?: string, permissions: string[], tags: paas.timeseries.Tag[]}) => Promise<paas.timeseries.Key>;
  /**
   * Setup your project on our platform
   * Setup a project
   */
  post(path: '/dbaas/timeseries/{serviceName}/setup'): (params: {serviceName: string, description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string}) => Promise<paas.timeseries.Project>;
  /**
   * OpenTSDBTokens
   * Create a OpenTSDB token
   */
  post(path: '/dbaas/timeseries/{serviceName}/token/opentsdb'): (params: {serviceName: string, description?: string, permission: string, tags: paas.timeseries.Tag[]}) => Promise<tsaas.OpenTSDBToken>;
  /**
   * Key
   * Delete a OpenTSDB token
   */
  delete(path: '/dbaas/timeseries/{serviceName}/key/{keyId}'): (params: {keyId: string, serviceName: string}) => Promise<boolean>;
  /**
   * Key
   * Delete an OpenTSDB token
   */
  delete(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}'): (params: {serviceName: string, tokenId: string}) => Promise<boolean>;
}
/**
 * classic Model
 */type orderPrice = order.Price;

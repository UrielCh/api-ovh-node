import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dbaas/timeseries Models
 * Source: https://eu.api.ovh.com/1.0/dbaas/timeseries.json
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace order {
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace paas {
    export namespace timeseries {
        // interface fullName: paas.timeseries.Consumption.Consumption
        export interface Consumption {
            from: string;
            generated: string;
            items: paas.timeseries.ConsumptionItem[];
            to: string;
            total: order.Price;
        }
        // interface fullName: paas.timeseries.ConsumptionItem.ConsumptionItem
        export interface ConsumptionItem {
            metricName: tsaas.MetricNameEnum;
            price: order.Price;
            quantity: complexType.UnitAndValue<number>;
            unitPrice: order.Price;
        }
        // interface fullName: paas.timeseries.Key.Key
        export interface Key {
            description: string;
            id: string;
            permissions: tsaas.PermissionEnum[];
            secret: string;
            tags: paas.timeseries.Tag[];
        }
        // interface fullName: paas.timeseries.Project.Project
        export interface Project {
            description?: string;
            displayName: string;
            region: paas.timeseries.Region;
            serviceName: string;
        }
        // interface fullName: paas.timeseries.Quota.Quota
        export interface Quota {
            current: number;
            max: number;
            type: tsaas.QuotaTypeEnum;
        }
        // interface fullName: paas.timeseries.Region.Region
        export interface Region {
            displayName: string;
            id: string;
            url: string;
        }
        // interface fullName: paas.timeseries.Tag.Tag
        export interface Tag {
            key: string;
            value: string;
        }
    }
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
export namespace tsaas {
    // type fullname: tsaas.MetricNameEnum
    export type MetricNameEnum = "storage" | "input" | "output"
    // interface fullName: tsaas.OpenTSDBToken.OpenTSDBToken
    export interface OpenTSDBToken {
        description: string;
        id: string;
        permission: string;
        protocol: string;
        secret: string;
        tags: paas.timeseries.Tag[];
    }
    // type fullname: tsaas.PermissionEnum
    export type PermissionEnum = "READ" | "WRITE"
    // type fullname: tsaas.QuotaTypeEnum
    export type QuotaTypeEnum = "ddp" | "mads"
    // interface fullName: tsaas.Warp10Token.Warp10Token
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
export interface Dbaas {
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
            $put(params?: { description?: string, displayName?: string, offerId?: string, regionId?: string, serviceName?: string, status?: timeseries.StatusTypeEnum }): Promise<void>;
            changeContact: {
                // POST /dbaas/timeseries/{serviceName}/changeContact
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            consumption: {
                // GET /dbaas/timeseries/{serviceName}/consumption
                $get(): Promise<paas.timeseries.Consumption[]>;
            }
            key: {
                // GET /dbaas/timeseries/{serviceName}/key
                $get(): Promise<paas.timeseries.Key[]>;
                // POST /dbaas/timeseries/{serviceName}/key
                $post(params: { description?: string, permissions: string[], tags: paas.timeseries.Tag[] }): Promise<paas.timeseries.Key>;
                $(keyId: string): {
                    // DELETE /dbaas/timeseries/{serviceName}/key/{keyId}
                    $delete(): Promise<boolean>;
                    // GET /dbaas/timeseries/{serviceName}/key/{keyId}
                    $get(): Promise<paas.timeseries.Key>;
                    // PUT /dbaas/timeseries/{serviceName}/key/{keyId}
                    $put(params: { description?: string, permissions: tsaas.PermissionEnum[], tags: paas.timeseries.Tag[] }): Promise<paas.timeseries.Key>;
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
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
            setup: {
                // POST /dbaas/timeseries/{serviceName}/setup
                $post(params: { description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string }): Promise<paas.timeseries.Project>;
            }
            token: {
                opentsdb: {
                    // GET /dbaas/timeseries/{serviceName}/token/opentsdb
                    $get(): Promise<tsaas.OpenTSDBToken[]>;
                    // POST /dbaas/timeseries/{serviceName}/token/opentsdb
                    $post(params: { description?: string, permission: string, tags: paas.timeseries.Tag[] }): Promise<tsaas.OpenTSDBToken>;
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
}

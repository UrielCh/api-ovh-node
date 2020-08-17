import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dbaas/timeseries Models
 * Source: https://eu.api.soyoustart.com/1.0/dbaas/timeseries.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace order {
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    /**
     * Price with it's currency and textual representation
     * interface fullName: order.Price.Price
     */
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace paas {
    export namespace timeseries {
        /**
         * Consumption
         * interface fullName: paas.timeseries.Consumption.Consumption
         */
        export interface Consumption {
            from: string;
            generated: string;
            items: paas.timeseries.ConsumptionItem[];
            to: string;
            total: order.Price;
        }
        /**
         * ConsumptionItem
         * interface fullName: paas.timeseries.ConsumptionItem.ConsumptionItem
         */
        export interface ConsumptionItem {
            metricName: tsaas.MetricNameEnum;
            price: order.Price;
            quantity: complexType.UnitAndValue<number>;
            unitPrice: order.Price;
        }
        /**
         * Key
         * interface fullName: paas.timeseries.Key.Key
         */
        export interface Key {
            description: string;
            id: string;
            permissions: tsaas.PermissionEnum[];
            secret: string;
            tags: paas.timeseries.Tag[];
        }
        /**
         * Project
         * interface fullName: paas.timeseries.Project.Project
         */
        export interface Project {
            description?: string;
            displayName: string;
            region: paas.timeseries.Region;
            serviceName: string;
        }
        /**
         * Quota
         * interface fullName: paas.timeseries.Quota.Quota
         */
        export interface Quota {
            current: number;
            max: number;
            type: tsaas.QuotaTypeEnum;
        }
        /**
         * Region
         * interface fullName: paas.timeseries.Region.Region
         */
        export interface Region {
            displayName: string;
            id: string;
            url: string;
        }
        /**
         * Tag
         * interface fullName: paas.timeseries.Tag.Tag
         */
        export interface Tag {
            key: string;
            value: string;
        }
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
    /**
     * Timeseries project
     * interface fullName: timeseries.Project.Project
     */
    export interface Project {
        description?: string;
        displayName?: string;
        offerId?: string;
        regionId?: string;
        serviceName: string;
        status?: timeseries.StatusTypeEnum;
    }
    /**
     * The current status for the project
     * type fullname: timeseries.StatusTypeEnum
     */
    export type StatusTypeEnum = "ACTIVE" | "CREATION" | "DELETED" | "UNCONFIGURED"
}
export namespace tsaas {
    /**
     * Metric name
     * type fullname: tsaas.MetricNameEnum
     */
    export type MetricNameEnum = "storage" | "input" | "output"
    /**
     * Description not available
     * interface fullName: tsaas.OpenTSDBToken.OpenTSDBToken
     */
    export interface OpenTSDBToken {
        description: string;
        id: string;
        permission: string;
        protocol: string;
        secret: string;
        tags: paas.timeseries.Tag[];
    }
    /**
     * Tokens permissions
     * type fullname: tsaas.PermissionEnum
     */
    export type PermissionEnum = "READ" | "WRITE"
    /**
     * Project quotas
     * type fullname: tsaas.QuotaTypeEnum
     */
    export type QuotaTypeEnum = "ddp" | "mads"
    /**
     * Token to use Warp10 functions
     * interface fullName: tsaas.Warp10Token.Warp10Token
     */
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
 * Api model for /dbaas/timeseries
 */
export interface Dbaas {
    timeseries: {
        /**
         * List available services
         * GET /dbaas/timeseries
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        region: {
            /**
             * Get available regions
             * GET /dbaas/timeseries/region
             */
            $get(): Promise<paas.timeseries.Region[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /dbaas/timeseries/{serviceName}
             */
            $get(): Promise<timeseries.Project>;
            /**
             * Alter this object properties
             * PUT /dbaas/timeseries/{serviceName}
             */
            $put(params?: { description?: string, displayName?: string, offerId?: string, regionId?: string, serviceName?: string, status?: timeseries.StatusTypeEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /dbaas/timeseries/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            consumption: {
                /**
                 * Get consumption
                 * GET /dbaas/timeseries/{serviceName}/consumption
                 */
                $get(): Promise<paas.timeseries.Consumption[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            key: {
                /**
                 * Get keys for a project
                 * GET /dbaas/timeseries/{serviceName}/key
                 */
                $get(): Promise<paas.timeseries.Key[]>;
                /**
                 * Create a key for a project
                 * POST /dbaas/timeseries/{serviceName}/key
                 */
                $post(params: { description?: string, permissions: string[], tags: paas.timeseries.Tag[] }): Promise<paas.timeseries.Key>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(keyId: string): {
                    /**
                     * Delete a OpenTSDB token
                     * DELETE /dbaas/timeseries/{serviceName}/key/{keyId}
                     */
                    $delete(): Promise<boolean>;
                    /**
                     * Get a key
                     * GET /dbaas/timeseries/{serviceName}/key/{keyId}
                     */
                    $get(): Promise<paas.timeseries.Key>;
                    /**
                     * Create a key
                     * PUT /dbaas/timeseries/{serviceName}/key/{keyId}
                     */
                    $put(params: { description?: string, permissions: tsaas.PermissionEnum[], tags: paas.timeseries.Tag[] }): Promise<paas.timeseries.Key>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            quota: {
                /**
                 * Get quotas
                 * GET /dbaas/timeseries/{serviceName}/quota
                 */
                $get(): Promise<paas.timeseries.Quota[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /dbaas/timeseries/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /dbaas/timeseries/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            setup: {
                /**
                 * Setup a project
                 * POST /dbaas/timeseries/{serviceName}/setup
                 */
                $post(params: { description?: string, displayName: string, raTokenId?: string, raTokenKey?: string, regionId?: string }): Promise<paas.timeseries.Project>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            token: {
                opentsdb: {
                    /**
                     * Get OpenTSDB tokens
                     * GET /dbaas/timeseries/{serviceName}/token/opentsdb
                     */
                    $get(): Promise<tsaas.OpenTSDBToken[]>;
                    /**
                     * Create a OpenTSDB token
                     * POST /dbaas/timeseries/{serviceName}/token/opentsdb
                     */
                    $post(params: { description?: string, permission: string, tags: paas.timeseries.Tag[] }): Promise<tsaas.OpenTSDBToken>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(tokenId: string): {
                        /**
                         * Delete an OpenTSDB token
                         * DELETE /dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}
                         */
                        $delete(): Promise<boolean>;
                        /**
                         * Get a OpenTSDB token
                         * GET /dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}
                         */
                        $get(): Promise<tsaas.OpenTSDBToken>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
        };
    }
}

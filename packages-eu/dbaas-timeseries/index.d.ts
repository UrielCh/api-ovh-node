import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dbaas/timeseries Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace order {
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export declare namespace paas {
    namespace timeseries {
        interface Consumption {
            from: string;
            generated: string;
            items: paas.timeseries.ConsumptionItem[];
            to: string;
            total: order.Price;
        }
        interface ConsumptionItem {
            metricName: tsaas.MetricNameEnum;
            price: order.Price;
            quantity: complexType.UnitAndValue<number>;
            unitPrice: order.Price;
        }
        interface Key {
            description: string;
            id: string;
            permissions: tsaas.PermissionEnum[];
            secret: string;
            tags: paas.timeseries.Tag[];
        }
        interface Project {
            description?: string;
            displayName: string;
            region: paas.timeseries.Region;
            serviceName: string;
        }
        interface Quota {
            current: number;
            max: number;
            type: tsaas.QuotaTypeEnum;
        }
        interface Region {
            displayName: string;
            id: string;
            url: string;
        }
        interface Tag {
            key: string;
            value: string;
        }
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
export declare namespace timeseries {
    interface Project {
        description?: string;
        displayName?: string;
        offerId?: string;
        regionId?: string;
        serviceName: string;
        status?: timeseries.StatusTypeEnum;
    }
    type StatusTypeEnum = "ACTIVE" | "CREATION" | "DELETED" | "UNCONFIGURED";
}
export declare namespace tsaas {
    type MetricNameEnum = "storage" | "input" | "output";
    interface OpenTSDBToken {
        description: string;
        id: string;
        permission: string;
        protocol: string;
        secret: string;
        tags: paas.timeseries.Tag[];
    }
    type PermissionEnum = "READ" | "WRITE";
    type QuotaTypeEnum = "ddp" | "mads";
    interface Warp10Token {
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
export declare function proxyDbaasTimeseries(ovhEngine: OvhRequestable): Dbaas;
export default proxyDbaasTimeseries;
/**
 * Api Proxy model
 */ export interface Dbaas {
    timeseries: {
        $get(): Promise<string[]>;
        region: {
            $get(): Promise<paas.timeseries.Region[]>;
        };
        $(serviceName: string): {
            $get(): Promise<timeseries.Project>;
            $put(params?: {
                description?: string;
                displayName?: string;
                offerId?: string;
                regionId?: string;
                serviceName?: string;
                status?: timeseries.StatusTypeEnum;
            }): Promise<void>;
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            consumption: {
                $get(): Promise<paas.timeseries.Consumption[]>;
            };
            key: {
                $get(): Promise<paas.timeseries.Key[]>;
                $post(params: {
                    description?: string;
                    permissions: string[];
                    tags: paas.timeseries.Tag[];
                }): Promise<paas.timeseries.Key>;
                $(keyId: string): {
                    $delete(): Promise<boolean>;
                    $get(): Promise<paas.timeseries.Key>;
                    $put(params: {
                        description?: string;
                        permissions: tsaas.PermissionEnum[];
                        tags: paas.timeseries.Tag[];
                    }): Promise<paas.timeseries.Key>;
                };
            };
            quota: {
                $get(): Promise<paas.timeseries.Quota[]>;
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            setup: {
                $post(params: {
                    description?: string;
                    displayName: string;
                    raTokenId?: string;
                    raTokenKey?: string;
                    regionId?: string;
                }): Promise<paas.timeseries.Project>;
            };
            token: {
                opentsdb: {
                    $get(): Promise<tsaas.OpenTSDBToken[]>;
                    $post(params: {
                        description?: string;
                        permission: string;
                        tags: paas.timeseries.Tag[];
                    }): Promise<tsaas.OpenTSDBToken>;
                    $(tokenId: string): {
                        $delete(): Promise<boolean>;
                        $get(): Promise<tsaas.OpenTSDBToken>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the PAAS_TIMESERIES service
     * List available services
     */
    get(path: '/dbaas/timeseries'): () => Promise<string[]>;
    /**
     * Timeseries project
     * Get this object properties
     */
    get(path: '/dbaas/timeseries/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<timeseries.Project>;
    /**
     * Consumption
     * Get consumption
     */
    get(path: '/dbaas/timeseries/{serviceName}/consumption'): (params: {
        serviceName: string;
    }) => Promise<paas.timeseries.Consumption[]>;
    /**
     * Keys
     * Get keys for a project
     */
    get(path: '/dbaas/timeseries/{serviceName}/key'): (params: {
        serviceName: string;
    }) => Promise<paas.timeseries.Key[]>;
    /**
     * Key
     * Get a key
     */
    get(path: '/dbaas/timeseries/{serviceName}/key/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
    }) => Promise<paas.timeseries.Key>;
    /**
     * Quotas
     * Get quotas
     */
    get(path: '/dbaas/timeseries/{serviceName}/quota'): (params: {
        serviceName: string;
    }) => Promise<paas.timeseries.Quota[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dbaas/timeseries/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * OpenTSDBTokens
     * Get OpenTSDB tokens
     */
    get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb'): (params: {
        serviceName: string;
    }) => Promise<tsaas.OpenTSDBToken[]>;
    /**
     * Key
     * Get a OpenTSDB token
     */
    get(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}'): (params: {
        serviceName: string;
        tokenId: string;
    }) => Promise<tsaas.OpenTSDBToken>;
    /**
     * Regions
     * Get available regions
     */
    get(path: '/dbaas/timeseries/region'): () => Promise<paas.timeseries.Region[]>;
    /**
     * Timeseries project
     * Alter this object properties
     */
    put(path: '/dbaas/timeseries/{serviceName}'): (params: {
        serviceName: string;
        description?: string;
        displayName?: string;
        offerId?: string;
        regionId?: string;
        status?: timeseries.StatusTypeEnum;
    }) => Promise<void>;
    /**
     * Key
     * Create a key
     */
    put(path: '/dbaas/timeseries/{serviceName}/key/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
        description?: string;
        permissions: tsaas.PermissionEnum[];
        tags: paas.timeseries.Tag[];
    }) => Promise<paas.timeseries.Key>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dbaas/timeseries/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/dbaas/timeseries/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Keys
     * Create a key for a project
     */
    post(path: '/dbaas/timeseries/{serviceName}/key'): (params: {
        serviceName: string;
        description?: string;
        permissions: string[];
        tags: paas.timeseries.Tag[];
    }) => Promise<paas.timeseries.Key>;
    /**
     * Setup your project on our platform
     * Setup a project
     */
    post(path: '/dbaas/timeseries/{serviceName}/setup'): (params: {
        serviceName: string;
        description?: string;
        displayName: string;
        raTokenId?: string;
        raTokenKey?: string;
        regionId?: string;
    }) => Promise<paas.timeseries.Project>;
    /**
     * OpenTSDBTokens
     * Create a OpenTSDB token
     */
    post(path: '/dbaas/timeseries/{serviceName}/token/opentsdb'): (params: {
        serviceName: string;
        description?: string;
        permission: string;
        tags: paas.timeseries.Tag[];
    }) => Promise<tsaas.OpenTSDBToken>;
    /**
     * Key
     * Delete a OpenTSDB token
     */
    delete(path: '/dbaas/timeseries/{serviceName}/key/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
    }) => Promise<boolean>;
    /**
     * Key
     * Delete an OpenTSDB token
     */
    delete(path: '/dbaas/timeseries/{serviceName}/token/opentsdb/{tokenId}'): (params: {
        serviceName: string;
        tokenId: string;
    }) => Promise<boolean>;
}

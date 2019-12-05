import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /paas/timeseries Models
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
    type PermissionEnum = "READ" | "WRITE";
    type QuotaTypeEnum = "ddp" | "mads";
}
/**
 * END API /paas/timeseries Models
 */
export declare function proxyPaasTimeseries(ovhEngine: OvhRequestable): Paas;
export default proxyPaasTimeseries;
/**
 * Api Proxy model
 */ export interface Paas {
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
        };
    };
    /**
     * Operations about the PAAS_TIMESERIES service
     * List available services
     */
    get(path: '/paas/timeseries'): () => Promise<string[]>;
    /**
     * Timeseries project
     * Get this object properties
     */
    get(path: '/paas/timeseries/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<timeseries.Project>;
    /**
     * Consumption
     * Get consumption
     */
    get(path: '/paas/timeseries/{serviceName}/consumption'): (params: {
        serviceName: string;
    }) => Promise<paas.timeseries.Consumption[]>;
    /**
     * Keys
     * Get keys for a project
     */
    get(path: '/paas/timeseries/{serviceName}/key'): (params: {
        serviceName: string;
    }) => Promise<paas.timeseries.Key[]>;
    /**
     * Key
     * Get a key
     */
    get(path: '/paas/timeseries/{serviceName}/key/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
    }) => Promise<paas.timeseries.Key>;
    /**
     * Quotas
     * Get quotas
     */
    get(path: '/paas/timeseries/{serviceName}/quota'): (params: {
        serviceName: string;
    }) => Promise<paas.timeseries.Quota[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/paas/timeseries/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Regions
     * Get available regions
     */
    get(path: '/paas/timeseries/region'): () => Promise<paas.timeseries.Region[]>;
    /**
     * Timeseries project
     * Alter this object properties
     */
    put(path: '/paas/timeseries/{serviceName}'): (params: {
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
    put(path: '/paas/timeseries/{serviceName}/key/{keyId}'): (params: {
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
    put(path: '/paas/timeseries/{serviceName}/serviceInfos'): (params: {
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
    post(path: '/paas/timeseries/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Keys
     * Create a key for a project
     */
    post(path: '/paas/timeseries/{serviceName}/key'): (params: {
        serviceName: string;
        description?: string;
        permissions: string[];
        tags: paas.timeseries.Tag[];
    }) => Promise<paas.timeseries.Key>;
    /**
     * Setup your project on our platform
     * Setup a project
     */
    post(path: '/paas/timeseries/{serviceName}/setup'): (params: {
        serviceName: string;
        description?: string;
        displayName: string;
        raTokenId?: string;
        raTokenKey?: string;
        regionId?: string;
    }) => Promise<paas.timeseries.Project>;
    /**
     * Key
     * Delete a OpenTSDB token
     */
    delete(path: '/paas/timeseries/{serviceName}/key/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
    }) => Promise<boolean>;
}

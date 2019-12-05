import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /cdn/webstorage Models
 */
export declare namespace cdn {
    namespace webstorage {
        interface Account {
            domain: string;
            server: string;
            storageLimit: number;
            storageUsage: number;
        }
        interface AccountCredentials {
            endpoint: string;
            login: string;
            password: string;
            tenant: string;
        }
        interface StatsDataType {
            date: string;
            value: number;
        }
        type StatsPeriodEnum = "day" | "month" | "week";
        type StatsTypeEnum = "backend" | "cdn" | "quota";
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
/**
 * END API /cdn/webstorage Models
 */
export declare function proxyCdnWebstorage(ovhEngine: OvhRequestable): Cdn;
export default proxyCdnWebstorage;
/**
 * Api Proxy model
 */ export interface Cdn {
    webstorage: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<cdn.webstorage.Account>;
            credentials: {
                $get(): Promise<cdn.webstorage.AccountCredentials>;
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
            statistics: {
                $get(params: {
                    period: cdn.webstorage.StatsPeriodEnum;
                    type: cdn.webstorage.StatsTypeEnum;
                }): Promise<cdn.webstorage.StatsDataType[]>;
            };
        };
    };
    /**
     * Operations about the CDNSTATIC service
     * List available services
     */
    get(path: '/cdn/webstorage'): () => Promise<string[]>;
    /**
     * Static CDN
     * Get this object properties
     */
    get(path: '/cdn/webstorage/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<cdn.webstorage.Account>;
    /**
     * credentials operations
     * Gives for customer credentials to accesss swift account
     */
    get(path: '/cdn/webstorage/{serviceName}/credentials'): (params: {
        serviceName: string;
    }) => Promise<cdn.webstorage.AccountCredentials>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/cdn/webstorage/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * statistics operations
     * Return stats about bandwidth consumption
     */
    get(path: '/cdn/webstorage/{serviceName}/statistics'): (params: {
        serviceName: string;
        period: cdn.webstorage.StatsPeriodEnum;
        type: cdn.webstorage.StatsTypeEnum;
    }) => Promise<cdn.webstorage.StatsDataType[]>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/cdn/webstorage/{serviceName}/serviceInfos'): (params: {
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
}

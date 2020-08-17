import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cdn/webstorage Models
 * Source: https://eu.api.soyoustart.com/1.0/cdn/webstorage.json
 */
export namespace cdn {
    export namespace webstorage {
        /**
         * Static CDN
         * interface fullName: cdn.webstorage.Account.Account
         */
        export interface Account {
            domain: string;
            server: string;
            storageLimit: number;
            storageUsage: number;
        }
        /**
         * A structure with credentials for using openstack account
         * interface fullName: cdn.webstorage.AccountCredentials.AccountCredentials
         */
        export interface AccountCredentials {
            endpoint: string;
            login: string;
            password: string;
            tenant: string;
        }
        /**
         * A structure describing type of a stats hash
         * interface fullName: cdn.webstorage.StatsDataType.StatsDataType
         */
        export interface StatsDataType {
            date: string;
            value: number;
        }
        /**
         * Period of the statistics
         * type fullname: cdn.webstorage.StatsPeriodEnum
         */
        export type StatsPeriodEnum = "day" | "month" | "week"
        /**
         * Type of statistics related to cache
         * type fullname: cdn.webstorage.StatsTypeEnum
         */
        export type StatsTypeEnum = "backend" | "cdn" | "quota"
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

/**
 * END API /cdn/webstorage Models
 */
export function proxyCdnWebstorage(ovhEngine: OvhRequestable): Cdn {
    return buildOvhProxy(ovhEngine, '/cdn');
}
export default proxyCdnWebstorage;
/**
 * Api model for /cdn/webstorage
 */
export interface Cdn {
    webstorage: {
        /**
         * List available services
         * GET /cdn/webstorage
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /cdn/webstorage/{serviceName}
             */
            $get(): Promise<cdn.webstorage.Account>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            credentials: {
                /**
                 * Gives for customer credentials to accesss swift account
                 * GET /cdn/webstorage/{serviceName}/credentials
                 */
                $get(): Promise<cdn.webstorage.AccountCredentials>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /cdn/webstorage/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /cdn/webstorage/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            statistics: {
                /**
                 * Return stats about bandwidth consumption
                 * GET /cdn/webstorage/{serviceName}/statistics
                 */
                $get(params: { period: cdn.webstorage.StatsPeriodEnum, type: cdn.webstorage.StatsTypeEnum }): Promise<cdn.webstorage.StatsDataType[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}

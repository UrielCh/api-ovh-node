import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /service Models
 * Source: https://ca.api.ovh.com/1.0/service.json
 */
export namespace complexType {
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export namespace service {
    /**
     * Possible billing states
     * type fullname: service.BillingStateEnum
     */
    export type BillingStateEnum = "expired" | "ok" | "pending" | "unpaid"
    /**
     * Plan information
     * interface fullName: service.Plan.Plan
     */
    export interface Plan {
        code?: string;
        product: service.plan.Product;
    }
    /**
     * Renew information
     * interface fullName: service.Renew.Renew
     */
    export interface Renew {
        dayOfMonth?: number;
        interval?: service.renew.Interval;
        mode: service.renew.Mode;
        possibleIntervals?: service.renew.Interval[];
        possibleModes: service.renew.Mode[];
    }
    /**
     * Resource service informations
     * interface fullName: service.Resource.Resource
     */
    export interface Resource {
        displayName: string;
        name?: string;
        state?: service.ResourceStateEnum;
    }
    /**
     * Possible resource states
     * type fullname: service.ResourceStateEnum
     */
    export type ResourceStateEnum = "deleted" | "deleting" | "ok" | "opening" | "suspended" | "suspending" | "toDelete" | "toOpen" | "toSuspend"
    /**
     * route of this service
     * interface fullName: service.Route.Route
     */
    export interface Route {
        path?: string;
        url?: string;
        vars: complexType.SafeKeyValue<string>[];
    }
    export namespace plan {
        /**
         * Product plan information
         * interface fullName: service.plan.Product.Product
         */
        export interface Product {
            name?: string;
        }
    }
    export namespace renew {
        /**
         * Interval enum information
         * type fullname: service.renew.Interval
         */
        export type Interval = "P1M" | "P1Y" | "P2Y" | "P3M" | "P3Y" | "P6M"
        /**
         * Mode enum informations
         * type fullname: service.renew.Mode
         */
        export type Mode = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "deleteAtEndEngagement" | "deleteAtExpiration" | "manual" | "oneShot" | "option"
    }
}
export namespace serviceList {
    /**
     * Details about a Service
     * interface fullName: serviceList.Service.Service
     */
    export interface Service {
        creationDate: string;
        details: complexType.SafeKeyValue<string>[];
        engagementDate?: string;
        expirationDate?: string;
        nextBillingDate?: string;
        plan: service.Plan;
        quantity: number;
        renew?: service.Renew;
        resource: service.Resource;
        route: service.Route;
        state: service.BillingStateEnum;
    }
}
/**
 * Api model for /service
 */
export interface Service {
    /**
     * Services
     * GET /service
     */
    $get(): Promise<number[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): void;
    $(serviceId: number): {
        /**
         * Get this object properties
         * GET /service/{serviceId}
         */
        $get(): Promise<serviceList.Service>;
        /**
         * Alter this object properties
         * PUT /service/{serviceId}
         */
        $put(params?: { creationDate?: string, details?: complexType.SafeKeyValue<string>[], engagementDate?: string, expirationDate?: string, nextBillingDate?: string, plan?: service.Plan, quantity?: number, renew?: service.Renew, resource?: service.Resource, route?: service.Route, state?: service.BillingStateEnum }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        reopen: {
            /**
             * Reopen a suspended service
             * POST /service/{serviceId}/reopen
             */
            $post(): Promise<void>;
        }
        suspend: {
            /**
             * Suspend the service. The service won't be accessible, but you will still be charged for it
             * POST /service/{serviceId}/suspend
             */
            $post(): Promise<void>;
        }
        terminate: {
            /**
             * Terminates a suspended service
             * POST /service/{serviceId}/terminate
             */
            $post(): Promise<void>;
        }
    };
}

export declare function proxyService(ovhEngine: OvhRequestable): Service;
export default proxyService;

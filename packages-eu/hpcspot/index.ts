import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /hpcspot Models
 * Source: https://eu.api.ovh.com/1.0/hpcspot.json
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
export namespace hpcspot {
    /**
     * Account HPC Spot
     * interface fullName: hpcspot.Account.Account
     */
    export interface Account {
        name: string;
    }
    /**
     * Detail of a HPC Spot consumtion
     * interface fullName: hpcspot.Consumption.Consumption
     */
    export interface Consumption {
        description?: string;
        hpcspotItemEndDate: string;
        hpcspotItemId: number;
        hpcspotUrl?: string;
        id: number;
        orderId?: number;
        quantity: complexType.UnitAndValue<number>;
        reference: hpcspot.ConsumptionReferenceEnum;
        type: hpcspot.ConsumptionTypeEnum;
    }
    /**
     * All references a HPC Spot consumption can be in
     * type fullname: hpcspot.ConsumptionReferenceEnum
     */
    export type ConsumptionReferenceEnum = "12core.60gb.quadrok4000" | "16core.64gb" | "1core.4gb" | "1core.4gb.quadrok4000" | "2core.8gb" | "2core.8gb.quadrok4000" | "4core.15gb" | "4core.15gb.quadrok4000" | "4core.32gb" | "8core.30gb" | "8core.30gb.quadrok4000" | "8core.32gb.1teslak20"
    /**
     * All types a HPC Spot consumption can be in
     * type fullname: hpcspot.ConsumptionTypeEnum
     */
    export type ConsumptionTypeEnum = "job" | "reservation" | "session"
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
 * END API /hpcspot Models
 */
export function proxyHpcspot(ovhEngine: OvhRequestable): Hpcspot {
    return buildOvhProxy(ovhEngine, '/hpcspot');
}
export default proxyHpcspot;
/**
 * Api model for /hpcspot
 */
export interface Hpcspot {
    /**
     * List available services
     * GET /hpcspot
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /hpcspot/{serviceName}
         */
        $get(): Promise<hpcspot.Account>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        consumption: {
            /**
             * Details of the consumption of your account
             * GET /hpcspot/{serviceName}/consumption
             */
            $get(params?: { hpcspotItemEndDate_from?: string, hpcspotItemEndDate_to?: string, hpcspotItemId?: number, orderId?: number, type?: hpcspot.ConsumptionTypeEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /hpcspot/{serviceName}/consumption/{id}
                 */
                $get(): Promise<hpcspot.Consumption>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /hpcspot/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /hpcspot/{serviceName}/serviceInfos
             */
            $put(params: { canDeleteAtExpiration: boolean, contactAdmin: string, contactBilling: string, contactTech: string, creation: string, domain: string, engagedUpTo?: string, expiration: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType: service.RenewalTypeEnum, serviceId: number, status: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
    };
}

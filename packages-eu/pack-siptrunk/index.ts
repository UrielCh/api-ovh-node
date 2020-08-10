import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /pack/siptrunk Models
 * Source: https://eu.api.ovh.com/1.0/pack/siptrunk.json
 */
export namespace pack {
    export namespace siptrunk {
        /**
         * Pack of SIP trunk services
         * interface fullName: pack.siptrunk.PackSipTrunk.PackSipTrunk
         */
        export interface PackSipTrunk {
            packName: string;
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

/**
 * END API /pack/siptrunk Models
 */
export function proxyPackSiptrunk(ovhEngine: OvhRequestable): Pack {
    return buildOvhProxy(ovhEngine, '/pack');
}
export default proxyPackSiptrunk;
/**
 * Api model for /pack/siptrunk
 */
export interface Pack {
    siptrunk: {
        /**
         * List available services
         * GET /pack/siptrunk
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(packName: string): {
            /**
             * Get this object properties
             * GET /pack/siptrunk/{packName}
             */
            $get(): Promise<pack.siptrunk.PackSipTrunk>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /pack/siptrunk/{packName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /pack/siptrunk/{packName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /pack/siptrunk/{packName}/serviceInfos
                 */
                $put(params: { canDeleteAtExpiration: boolean, contactAdmin: string, contactBilling: string, contactTech: string, creation: string, domain: string, engagedUpTo?: string, expiration: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType: service.RenewalTypeEnum, serviceId: number, status: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}

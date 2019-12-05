import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /hpcspot Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace hpcspot {
    interface Account {
        name: string;
    }
    interface Consumption {
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
    type ConsumptionReferenceEnum = "12core.60gb.quadrok4000" | "16core.64gb" | "1core.4gb" | "1core.4gb.quadrok4000" | "2core.8gb" | "2core.8gb.quadrok4000" | "4core.15gb" | "4core.15gb.quadrok4000" | "4core.32gb" | "8core.30gb" | "8core.30gb.quadrok4000" | "8core.32gb.1teslak20";
    type ConsumptionTypeEnum = "job" | "reservation" | "session";
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
 * END API /hpcspot Models
 */
export declare function proxyHpcspot(ovhEngine: OvhRequestable): Hpcspot;
export default proxyHpcspot;
/**
 * Api Proxy model
 */ export interface Hpcspot {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<hpcspot.Account>;
        consumption: {
            $get(params?: {
                hpcspotItemEndDate_from?: string;
                hpcspotItemEndDate_to?: string;
                hpcspotItemId?: number;
                orderId?: number;
                type?: hpcspot.ConsumptionTypeEnum;
            }): Promise<number[]>;
            $(id: number): {
                $get(): Promise<hpcspot.Consumption>;
            };
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
    };
    /**
     * Operations about the HPCSPOT service
     * List available services
     */
    get(path: '/hpcspot'): () => Promise<string[]>;
    /**
     * Account HPC Spot
     * Get this object properties
     */
    get(path: '/hpcspot/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<hpcspot.Account>;
    /**
     * List the hpcspot.Consumption objects
     * Details of the consumption of your account
     */
    get(path: '/hpcspot/{serviceName}/consumption'): (params: {
        serviceName: string;
        hpcspotItemEndDate_from?: string;
        hpcspotItemEndDate_to?: string;
        hpcspotItemId?: number;
        orderId?: number;
        type?: hpcspot.ConsumptionTypeEnum;
    }) => Promise<number[]>;
    /**
     * Detail of a HPC Spot consumtion
     * Get this object properties
     */
    get(path: '/hpcspot/{serviceName}/consumption/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hpcspot.Consumption>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/hpcspot/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/hpcspot/{serviceName}/serviceInfos'): (params: {
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

import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /vip Models
 */
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
export declare namespace vip {
    interface SupportVip {
        serviceName: string;
        universe: vip.UniverseEnum[];
    }
    type UniverseEnum = "cloud" | "dedicated" | "telecom" | "web";
}
/**
 * END API /vip Models
 */
export declare function proxyVip(ovhEngine: OvhRequestable): Vip;
export default proxyVip;
/**
 * Api Proxy model
 */ export interface Vip {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<vip.SupportVip>;
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
     * Operations about the SUPPORT_PLUS service
     * List available services
     */
    get(path: '/vip'): () => Promise<string[]>;
    /**
     * Vip Service
     * Get this object properties
     */
    get(path: '/vip/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<vip.SupportVip>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/vip/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/vip/{serviceName}/serviceInfos'): (params: {
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

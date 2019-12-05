import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /stack/mis Models
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
export declare namespace stack {
    type StackTypeEnum = "MDS" | "MIS" | "MOS";
    namespace mis {
        interface product {
            domain: string;
            type: stack.StackTypeEnum;
        }
    }
}
/**
 * END API /stack/mis Models
 */
export declare function proxyStackMis(ovhEngine: OvhRequestable): Stack;
export default proxyStackMis;
/**
 * Api Proxy model
 */ export interface Stack {
    mis: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<stack.mis.product>;
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
    };
    /**
     * Operations about the GS service
     * List available services
     */
    get(path: '/stack/mis'): () => Promise<string[]>;
    /**
     * Stack MIS
     * Get this object properties
     */
    get(path: '/stack/mis/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<stack.mis.product>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/stack/mis/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/stack/mis/{serviceName}/serviceInfos'): (params: {
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

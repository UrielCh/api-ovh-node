import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /allDom Models
 */
export declare namespace allDom {
    interface AllDom {
        name: string;
        offer: domain.OfferEnum;
        type: allDom.TypeEnum;
    }
    interface AllDomDomain {
        domain: string;
    }
    type TypeEnum = "french" | "french+international" | "international";
}
export declare namespace domain {
    type OfferEnum = "diamond" | "gold" | "platinum";
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
 * END API /allDom Models
 */
export declare function proxyAllDom(ovhEngine: OvhRequestable): AllDom;
export default proxyAllDom;
/**
 * Api Proxy model
 */ export interface AllDom {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<allDom.AllDom>;
        domain: {
            $get(params?: {
                domain?: string;
            }): Promise<string[]>;
            $(domain: string): {
                $get(): Promise<allDom.AllDomDomain>;
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
     * Operations about the ALLDOM service
     * List available services
     */
    get(path: '/allDom'): () => Promise<string[]>;
    /**
     * AllDom administration
     * Get this object properties
     */
    get(path: '/allDom/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<allDom.AllDom>;
    /**
     * List the allDom.AllDomDomain objects
     * Domains attached to this allDom
     */
    get(path: '/allDom/{serviceName}/domain'): (params: {
        serviceName: string;
        domain?: string;
    }) => Promise<string[]>;
    /**
     * Domain name of a allDom
     * Get this object properties
     */
    get(path: '/allDom/{serviceName}/domain/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<allDom.AllDomDomain>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/allDom/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/allDom/{serviceName}/serviceInfos'): (params: {
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

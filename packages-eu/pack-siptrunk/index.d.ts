import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /pack/siptrunk Models
 */
export declare namespace pack {
    namespace siptrunk {
        interface PackSipTrunk {
            packName: string;
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
/**
 * END API /pack/siptrunk Models
 */
export declare function proxyPackSiptrunk(ovhEngine: OvhRequestable): Pack;
export default proxyPackSiptrunk;
/**
 * Api Proxy model
 */ export interface Pack {
    siptrunk: {
        $get(): Promise<string[]>;
        $(packName: string): {
            $get(): Promise<pack.siptrunk.PackSipTrunk>;
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
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
    };
    /**
     * Operations about the PACK service
     * List available services
     */
    get(path: '/pack/siptrunk'): () => Promise<string[]>;
    /**
     * Pack of SIP trunk services
     * Get this object properties
     */
    get(path: '/pack/siptrunk/{packName}'): (params: {
        packName: string;
    }) => Promise<pack.siptrunk.PackSipTrunk>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/pack/siptrunk/{packName}/serviceInfos'): (params: {
        packName: string;
    }) => Promise<services.Service>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/pack/siptrunk/{packName}/serviceInfos'): (params: {
        packName: string;
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
    post(path: '/pack/siptrunk/{packName}/changeContact'): (params: {
        packName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
}

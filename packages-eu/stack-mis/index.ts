import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /stack/mis Models
 * Source: https://eu.api.ovh.com/1.0/stack/mis.json
 */
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    // interface fullName: services.Service.Service
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
export namespace stack {
    // type fullname: stack.StackTypeEnum
    export type StackTypeEnum = "MDS" | "MIS" | "MOS"
    export namespace mis {
        // interface fullName: stack.mis.product.product
        export interface product {
            domain: string;
            type: stack.StackTypeEnum;
        }
    }
}

/**
 * END API /stack/mis Models
 */
export function proxyStackMis(ovhEngine: OvhRequestable): Stack {
    return buildOvhProxy(ovhEngine, '/stack');
}
export default proxyStackMis;
/**
 * Api Proxy model
 */// Apis harmony
// path /stack
export interface Stack {
    mis: {
        // GET /stack/mis
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /stack/mis/{serviceName}
            $get(): Promise<stack.mis.product>;
            serviceInfos: {
                // GET /stack/mis/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /stack/mis/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
        };
    }
}

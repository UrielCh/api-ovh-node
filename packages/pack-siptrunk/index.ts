import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /pack/siptrunk Models
 */
export namespace pack {
    export namespace siptrunk {
        //pack.siptrunk.PackSipTrunk
        // fullName: pack.siptrunk.PackSipTrunk.PackSipTrunk
        export interface PackSipTrunk {
            packName: string;
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
 * Api Proxy model
 */// Apis harmony
// path /pack
export interface Pack{
    siptrunk: {
        // GET /pack/siptrunk
        $get(): Promise<string[]>;
        $(packName: string): {
            // GET /pack/siptrunk/{packName}
            $get(): Promise<pack.siptrunk.PackSipTrunk>;
            changeContact: {
                // POST /pack/siptrunk/{packName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            serviceInfos: {
                // GET /pack/siptrunk/{packName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /pack/siptrunk/{packName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
        };
    }
// Api
  /**
   * Operations about the PACK service
   * List available services
   */
  get(path: '/pack/siptrunk'): () => Promise<string[]>;
  /**
   * Pack of SIP trunk services
   * Get this object properties
   */
  get(path: '/pack/siptrunk/{packName}'): (params: {packName: string}) => Promise<pack.siptrunk.PackSipTrunk>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/pack/siptrunk/{packName}/serviceInfos'): (params: {packName: string}) => Promise<services.Service>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/pack/siptrunk/{packName}/serviceInfos'): (params: {packName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/pack/siptrunk/{packName}/changeContact'): (params: {packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
}
/**
 * classic Model
 */
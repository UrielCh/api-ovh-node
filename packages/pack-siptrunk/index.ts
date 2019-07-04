import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace pack {
    export namespace siptrunk {
        //pack.siptrunk.PackSipTrunk
        // fullName: pack.siptrunk.PackSipTrunk.PackSipTrunk
        export interface PackSipTrunk {
            packName?: string;
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /pack
export interface Pack {
    siptrunk:  {
        // GET /pack/siptrunk
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /pack/siptrunk/{packName}
            $get(): Promise<pack.siptrunk.PackSipTrunk>;
            changeContact:  {
                // POST /pack/siptrunk/{packName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            serviceInfos:  {
                // GET /pack/siptrunk/{packName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /pack/siptrunk/{packName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
}
// Api
type PathsPackSiptrunkGET = '/pack/siptrunk/{packName}' |
  '/pack/siptrunk/{packName}/serviceInfos' |
  '/pack/siptrunk';

type PathsPackSiptrunkPUT = '/pack/siptrunk/{packName}/serviceInfos';

type PathsPackSiptrunkPOST = '/pack/siptrunk/{packName}/changeContact';

export class ApiPackSiptrunk extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the PACK service
   * List available services
   */
  public get(path: '/pack/siptrunk'): Promise<string[]>;
  /**
   * Pack of SIP trunk services
   * Get this object properties
   */
  public get(path: '/pack/siptrunk/{packName}', params: {packName: string}): Promise<pack.siptrunk.PackSipTrunk>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/pack/siptrunk/{packName}/serviceInfos', params: {packName: string}): Promise<services.Service>;
  public get(path: PathsPackSiptrunkGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/pack/siptrunk/{packName}/serviceInfos', params: {packName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsPackSiptrunkPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/pack/siptrunk/{packName}/changeContact', params: {packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  public post(path: PathsPackSiptrunkPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /ovhCloudConnect Models
 * Source: https://eu.api.ovh.com/1.0/ovhCloudConnect.json
 */
export namespace ovhcloudconnect {
    // interface fullName: ovhcloudconnect.Service.Service
    export interface Service {
        bandwidth: ovhcloudconnect.service.BandwidthEnum;
        description: string;
        interfaceList: number[];
        portQuantity: ovhcloudconnect.service.PortEnum;
        status: ovhcloudconnect.service.StatusEnum;
        uuid: string;
    }
    // interface fullName: ovhcloudconnect.Task.Task
    export interface Task {
        function: ovhcloudconnect.task.FunctionEnum;
        id: number;
        resourceId: number;
        status: ovhcloudconnect.task.StatusEnum;
    }
    // interface fullName: ovhcloudconnect.Update.Update
    export interface Update {
        description?: string;
    }
    export namespace service {
        // type fullname: ovhcloudconnect.service.BandwidthEnum
        export type BandwidthEnum = "10g" | "1g"
        // type fullname: ovhcloudconnect.service.PortEnum
        export type PortEnum = "1" | "2"
        // type fullname: ovhcloudconnect.service.StatusEnum
        export type StatusEnum = "active" | "closed"
    }
    export namespace task {
        // type fullname: ovhcloudconnect.task.FunctionEnum
        export type FunctionEnum = "lockInterface" | "unlockInterface" | "addPopConfiguration" | "delPopConfiguration" | "addDatacenterConfiguration" | "delDatacenterConfiguration" | "addDatacenterExtraConfiguration" | "delDatacenterExtraConfiguration"
        // type fullname: ovhcloudconnect.task.StatusEnum
        export type StatusEnum = "todo" | "doing" | "done" | "error"
    }
}
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
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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

/**
 * END API /ovhCloudConnect Models
 */
export function proxyOvhCloudConnect(ovhEngine: OvhRequestable): OvhCloudConnect {
    return buildOvhProxy(ovhEngine, '/ovhCloudConnect');
}
export default proxyOvhCloudConnect;
/**
 * Api Proxy model
 */// Apis harmony
// path /ovhCloudConnect
export interface OvhCloudConnect{
    // GET /ovhCloudConnect
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /ovhCloudConnect/{serviceName}
        $get(): Promise<ovhcloudconnect.Service>;
        // PUT /ovhCloudConnect/{serviceName}
        $put(params?: {description?: string}): Promise<void>;
        changeContact: {
            // POST /ovhCloudConnect/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /ovhCloudConnect/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        serviceInfos: {
            // GET /ovhCloudConnect/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /ovhCloudConnect/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        task: {
            // GET /ovhCloudConnect/{serviceName}/task
            $get(): Promise<number[]>;
            $(id: number): {
                // GET /ovhCloudConnect/{serviceName}/task/{id}
                $get(): Promise<ovhcloudconnect.Task>;
            };
        }
        terminate: {
            // POST /ovhCloudConnect/{serviceName}/terminate
            $post(): Promise<string>;
        }
    };
// Api
  /**
   * Operations about the OVHcloud Connect service
   * List available services
   */
  get(path: '/ovhCloudConnect'): () => Promise<string[]>;
  /**
   * Operations about the OVHcloud Connect service
   * Get service
   */
  get(path: '/ovhCloudConnect/{serviceName}'): (params: {serviceName: string}) => Promise<ovhcloudconnect.Service>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/ovhCloudConnect/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * 
   * Get Task linked to of a OVHcloud Connect Service
   */
  get(path: '/ovhCloudConnect/{serviceName}/task'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * 
   * Get Tasks linked to of a OVHcloud Connect Service
   */
  get(path: '/ovhCloudConnect/{serviceName}/task/{id}'): (params: {id: number, serviceName: string}) => Promise<ovhcloudconnect.Task>;
  /**
   * Operations about the OVHcloud Connect service
   * Modify service
   */
  put(path: '/ovhCloudConnect/{serviceName}'): (params: {serviceName: string, description?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/ovhCloudConnect/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/ovhCloudConnect/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/ovhCloudConnect/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/ovhCloudConnect/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
}

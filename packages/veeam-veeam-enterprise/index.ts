import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /veeam/veeamEnterprise Models
 */
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
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace veeam {
    export namespace veeamEnterprise {
        //veeam.veeamEnterprise.Account
        // fullName: veeam.veeamEnterprise.Account.Account
        export interface Account {
            ip?: string;
            port?: number;
            serviceName: string;
            sourceIp: string;
        }
        //veeam.veeamEnterprise.Task
        // fullName: veeam.veeamEnterprise.Task.Task
        export interface Task {
            endDate?: string;
            name: string;
            progress: number;
            startDate?: string;
            state: veeamEnterpriseTaskStateEnum;
            taskId: number;
        }
    }
}
export namespace veeamEnterprise {
    //veeamEnterprise.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "toCreate" | "todo" | "unfixed" | "waiting" | "waitingForChilds"
}

/**
 * END API /veeam/veeamEnterprise Models
 */
export function proxyVeeamVeeamEnterprise(ovhEngine: OvhRequestable): Veeam {
    return buildOvhProxy(ovhEngine, '/veeam');
}
export default proxyVeeamVeeamEnterprise;
/**
 * Api Proxy model
 */// Apis harmony
// path /veeam
export interface Veeam{
    veeamEnterprise: {
        // GET /veeam/veeamEnterprise
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /veeam/veeamEnterprise/{serviceName}
            $get(): Promise<veeam.veeamEnterprise.Account>;
            confirmTermination: {
                // POST /veeam/veeamEnterprise/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            register: {
                // POST /veeam/veeamEnterprise/{serviceName}/register
                $post(params: {ip: string, password: string, port: number, username: string}): Promise<veeam.veeamEnterprise.Task[]>;
            }
            serviceInfos: {
                // GET /veeam/veeamEnterprise/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /veeam/veeamEnterprise/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            task: {
                // GET /veeam/veeamEnterprise/{serviceName}/task
                $get(params?: {name?: string, state?: veeamEnterprise.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /veeam/veeamEnterprise/{serviceName}/task/{taskId}
                    $get(): Promise<veeam.veeamEnterprise.Task>;
                };
            }
            terminate: {
                // POST /veeam/veeamEnterprise/{serviceName}/terminate
                $post(): Promise<string>;
            }
            update: {
                // POST /veeam/veeamEnterprise/{serviceName}/update
                $post(params: {ip: string, password: string, port: number, username: string}): Promise<veeam.veeamEnterprise.Task[]>;
            }
        };
    }
// Api
  /**
   * Operations about the VEEAMENTERPRISE service
   * List available services
   */
  get(path: '/veeam/veeamEnterprise'): () => Promise<string[]>;
  /**
   * Veeeam Enterprise offer
   * Get this object properties
   */
  get(path: '/veeam/veeamEnterprise/{serviceName}'): (params: {serviceName: string}) => Promise<veeam.veeamEnterprise.Account>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the veeam.veeamEnterprise.Task objects
   * Tasks associated with Veeam Enterprise
   */
  get(path: '/veeam/veeamEnterprise/{serviceName}/task'): (params: {serviceName: string, name?: string, state?: veeamEnterpriseTaskStateEnum}) => Promise<number[]>;
  /**
   * Operation with the Enterprise Account
   * Get this object properties
   */
  get(path: '/veeam/veeamEnterprise/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<veeam.veeamEnterprise.Task>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/veeam/veeamEnterprise/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * register operations
   * Register Veeam Backup Server to Veeam Enterprise
   */
  post(path: '/veeam/veeamEnterprise/{serviceName}/register'): (params: {serviceName: string, ip: string, password: string, port: number, username: string}) => Promise<veeam.veeamEnterprise.Task[]>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/veeam/veeamEnterprise/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * update operations
   * Update Veeam enterprise configuration
   */
  post(path: '/veeam/veeamEnterprise/{serviceName}/update'): (params: {serviceName: string, ip: string, password: string, port: number, username: string}) => Promise<veeam.veeamEnterprise.Task[]>;
}
/**
 * classic Model
 */type veeamEnterpriseTaskStateEnum = veeamEnterprise.TaskStateEnum;

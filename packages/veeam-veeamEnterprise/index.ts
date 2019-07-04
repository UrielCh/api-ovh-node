import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
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
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace veeam {
    export namespace veeamEnterprise {
        //veeam.veeamEnterprise.Account
        // fullName: veeam.veeamEnterprise.Account.Account
        export interface Account {
            ip?: string;
            port?: number;
            serviceName?: string;
            sourceIp?: string;
        }
        //veeam.veeamEnterprise.Task
        // fullName: veeam.veeamEnterprise.Task.Task
        export interface Task {
            endDate?: string;
            name?: string;
            progress?: number;
            startDate?: string;
            state?: OVH.veeamEnterprise.TaskStateEnum;
            taskId?: number;
        }
    }
}
export namespace veeamEnterprise {
    //veeamEnterprise.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "toCreate" | "todo" | "unfixed" | "waiting" | "waitingForChilds"
}
// Apis harmony
// path /veeam
export interface Veeam {
    veeamEnterprise:  {
        // GET /veeam/veeamEnterprise
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /veeam/veeamEnterprise/{serviceName}
            $get(): Promise<veeam.veeamEnterprise.Account>;
            update:  {
                // POST /veeam/veeamEnterprise/{serviceName}/update
                $post(body?: {ip: string, password: string, port: number, username: string}): Promise<veeam.veeamEnterprise.Task[]>;
            }
            serviceInfos:  {
                // GET /veeam/veeamEnterprise/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /veeam/veeamEnterprise/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            terminate:  {
                // POST /veeam/veeamEnterprise/{serviceName}/terminate
                $post(): Promise<string>;
            }
            confirmTermination:  {
                // POST /veeam/veeamEnterprise/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            register:  {
                // POST /veeam/veeamEnterprise/{serviceName}/register
                $post(body?: {ip: string, password: string, port: number, username: string}): Promise<veeam.veeamEnterprise.Task[]>;
            }
            task:  {
                // GET /veeam/veeamEnterprise/{serviceName}/task
                $get(param?: {name?: string, state?: veeamEnterprise.TaskStateEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /veeam/veeamEnterprise/{serviceName}/task/{taskId}
                    $get(): Promise<veeam.veeamEnterprise.Task>;
                } | any
            }
        } | any
    }
}
// Api
type PathsVeeamVeeamEnterpriseGET = '/veeam/veeamEnterprise/{serviceName}' |
  '/veeam/veeamEnterprise/{serviceName}/serviceInfos' |
  '/veeam/veeamEnterprise/{serviceName}/task' |
  '/veeam/veeamEnterprise/{serviceName}/task/{taskId}' |
  '/veeam/veeamEnterprise';

type PathsVeeamVeeamEnterprisePUT = '/veeam/veeamEnterprise/{serviceName}/serviceInfos';

type PathsVeeamVeeamEnterprisePOST = '/veeam/veeamEnterprise/{serviceName}/update' |
  '/veeam/veeamEnterprise/{serviceName}/terminate' |
  '/veeam/veeamEnterprise/{serviceName}/confirmTermination' |
  '/veeam/veeamEnterprise/{serviceName}/register';

export class ApiVeeamVeeamEnterprise extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the VEEAMENTERPRISE service
   * List available services
   */
  public get(path: '/veeam/veeamEnterprise'): Promise<string[]>;
  /**
   * Veeeam Enterprise offer
   * Get this object properties
   */
  public get(path: '/veeam/veeamEnterprise/{serviceName}', params: {serviceName: string}): Promise<veeam.veeamEnterprise.Account>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the veeam.veeamEnterprise.Task objects
   * Tasks associated with Veeam Enterprise
   */
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task', params: {serviceName: string, name?: string, state?: OVH.veeamEnterprise.TaskStateEnum}): Promise<number[]>;
  /**
   * Operation with the Enterprise Account
   * Get this object properties
   */
  public get(path: '/veeam/veeamEnterprise/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<veeam.veeamEnterprise.Task>;
  public get(path: PathsVeeamVeeamEnterpriseGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsVeeamVeeamEnterprisePUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/veeam/veeamEnterprise/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * register operations
   * Register Veeam Backup Server to Veeam Enterprise
   */
  public post(path: '/veeam/veeamEnterprise/{serviceName}/register', params: {serviceName: string, ip: string, password: string, port: number, username: string}): Promise<veeam.veeamEnterprise.Task[]>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/veeam/veeamEnterprise/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * update operations
   * Update Veeam enterprise configuration
   */
  public post(path: '/veeam/veeamEnterprise/{serviceName}/update', params: {serviceName: string, ip: string, password: string, port: number, username: string}): Promise<veeam.veeamEnterprise.Task[]>;
  public post(path: PathsVeeamVeeamEnterprisePOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
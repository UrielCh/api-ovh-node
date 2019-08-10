import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /deskaas Models
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace deskaas {
    // type fullname: deskaas.StateEnum
    export type StateEnum = "available" | "delivered" | "disabled" | "error" | "reserved"
    // interface fullName: deskaas.Task.Task
    export interface Task {
        description?: string;
        lastModificationDate?: string;
        name: string;
        progress: number;
        state: deskaas.TaskStateEnum;
        taskId: number;
    }
    // type fullname: deskaas.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    // interface fullName: deskaas.User.User
    export interface User {
        activationState: deskaas.user.ActivationStateEnum;
        email: string;
        name: string;
        state: deskaas.user.StateEnum;
        userId: number;
    }
    // interface fullName: deskaas.deskaas.deskaas
    export interface deskaas {
        alias: string;
        dataDisk: complexType.UnitAndValue<number>;
        ip?: string;
        os: string;
        planCode: string;
        ram: complexType.UnitAndValue<number>;
        reference: string;
        serviceName: string;
        state: deskaas.StateEnum;
        url?: string;
        vcpu: number;
    }
    // interface fullName: deskaas.passwordPolicy.passwordPolicy
    export interface passwordPolicy {
        deniedChars: string[];
        digitMandatory: boolean;
        letterMandatory: boolean;
        lowercaseLetterMandatory: boolean;
        maxLength: number;
        minLength: number;
        specialMandatory: boolean;
        uppercaseLetterMandatory: boolean;
    }
    export namespace user {
        // type fullname: deskaas.user.ActivationStateEnum
        export type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable"
        // type fullname: deskaas.user.StateEnum
        export type StateEnum = "creating" | "deleting" | "delivered" | "error"
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
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
 * END API /deskaas Models
 */
export function proxyDeskaas(ovhEngine: OvhRequestable): Deskaas {
    return buildOvhProxy(ovhEngine, '/deskaas');
}
export default proxyDeskaas;
/**
 * Api Proxy model
 */// Apis harmony
// path /deskaas
export interface Deskaas{
    // GET /deskaas
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /deskaas/{serviceName}
        $get(): Promise<deskaas.deskaas>;
        changeAlias: {
            // POST /deskaas/{serviceName}/changeAlias
            $post(params: {alias: string}): Promise<deskaas.Task>;
        }
        changeContact: {
            // POST /deskaas/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /deskaas/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        console: {
            // POST /deskaas/{serviceName}/console
            $post(): Promise<deskaas.Task>;
        }
        passwordPolicy: {
            // GET /deskaas/{serviceName}/passwordPolicy
            $get(): Promise<deskaas.passwordPolicy>;
        }
        reboot: {
            // POST /deskaas/{serviceName}/reboot
            $post(): Promise<deskaas.Task>;
        }
        refresh: {
            // POST /deskaas/{serviceName}/refresh
            $post(): Promise<deskaas.Task>;
        }
        serviceInfos: {
            // GET /deskaas/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /deskaas/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        task: {
            // GET /deskaas/{serviceName}/task
            $get(params?: {state?: deskaas.TaskStateEnum}): Promise<number[]>;
            $(taskId: number): {
                // GET /deskaas/{serviceName}/task/{taskId}
                $get(): Promise<deskaas.Task>;
            };
        }
        terminate: {
            // POST /deskaas/{serviceName}/terminate
            $post(): Promise<string>;
        }
        upgrade: {
            // POST /deskaas/{serviceName}/upgrade
            $post(params?: {newReference?: string, planCode?: string}): Promise<deskaas.Task>;
        }
        user: {
            // GET /deskaas/{serviceName}/user
            $get(): Promise<deskaas.User>;
            changePassword: {
                // POST /deskaas/{serviceName}/user/changePassword
                $post(params?: {password?: string}): Promise<deskaas.Task>;
            }
            changeProperties: {
                // POST /deskaas/{serviceName}/user/changeProperties
                $post(params?: {email?: string}): Promise<deskaas.Task>;
            }
            task: {
                // GET /deskaas/{serviceName}/user/task
                $get(params?: {state?: deskaas.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /deskaas/{serviceName}/user/task/{taskId}
                    $get(): Promise<deskaas.Task>;
                };
            }
        }
    };
// Api
  /**
   * Operations about the DESKAAS service
   * List available services
   */
  get(path: '/deskaas'): () => Promise<string[]>;
  /**
   * Desktop As A Service
   * Get this object properties
   */
  get(path: '/deskaas/{serviceName}'): (params: {serviceName: string}) => Promise<deskaas.deskaas>;
  /**
   * passwordPolicy operations
   * Get the current password policy for your Desktop As A Service
   */
  get(path: '/deskaas/{serviceName}/passwordPolicy'): (params: {serviceName: string}) => Promise<deskaas.passwordPolicy>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/deskaas/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the deskaas.Task objects
   * Tasks associated with this Desktop As A Service
   */
  get(path: '/deskaas/{serviceName}/task'): (params: {serviceName: string, state?: deskaas.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Desktop As A Service component
   * Get this object properties
   */
  get(path: '/deskaas/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<deskaas.Task>;
  /**
   * Desktop As A Service User
   * Get this object properties
   */
  get(path: '/deskaas/{serviceName}/user'): (params: {serviceName: string}) => Promise<deskaas.User>;
  /**
   * List the deskaas.Task objects
   * Tasks associated with this User
   */
  get(path: '/deskaas/{serviceName}/user/task'): (params: {serviceName: string, state?: deskaas.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Desktop As A Service component
   * Get this object properties
   */
  get(path: '/deskaas/{serviceName}/user/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<deskaas.Task>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/deskaas/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * changeAlias operations
   * Change the Virtual Desktop alias
   */
  post(path: '/deskaas/{serviceName}/changeAlias'): (params: {serviceName: string, alias: string}) => Promise<deskaas.Task>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/deskaas/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/deskaas/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * console operations
   * New console access
   */
  post(path: '/deskaas/{serviceName}/console'): (params: {serviceName: string}) => Promise<deskaas.Task>;
  /**
   * reboot operations
   * Reboot the Operating system of the Cloud Desktop.
   */
  post(path: '/deskaas/{serviceName}/reboot'): (params: {serviceName: string}) => Promise<deskaas.Task>;
  /**
   * refresh operations
   * Refresh the Operating system of the Desktop As A Service. All your personnal data are kept.
   */
  post(path: '/deskaas/{serviceName}/refresh'): (params: {serviceName: string}) => Promise<deskaas.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/deskaas/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * upgrade operations
   * Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop
   */
  post(path: '/deskaas/{serviceName}/upgrade'): (params: {serviceName: string, newReference?: string, planCode?: string}) => Promise<deskaas.Task>;
  /**
   * changePassword operations
   * Change Desktop As A Service user password
   */
  post(path: '/deskaas/{serviceName}/user/changePassword'): (params: {serviceName: string, password?: string}) => Promise<deskaas.Task>;
  /**
   * changeProperties operations
   * Change Desktop As A Service user properties
   */
  post(path: '/deskaas/{serviceName}/user/changeProperties'): (params: {serviceName: string, email?: string}) => Promise<deskaas.Task>;
}
/**
 * classic Model
 */
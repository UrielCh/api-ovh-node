import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace deskaas {
    //deskaas.StateEnum
    export type StateEnum = "available" | "delivered" | "disabled" | "error" | "reserved"
    //deskaas.Task
    // fullName: deskaas.Task.Task
    export interface Task {
        description?: string;
        lastModificationDate?: string;
        name?: string;
        progress?: number;
        state?: OVH.deskaas.TaskStateEnum;
        taskId?: number;
    }
    //deskaas.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    //deskaas.User
    // fullName: deskaas.User.User
    export interface User {
        activationState?: OVH.deskaas.user.ActivationStateEnum;
        email?: string;
        name?: string;
        state?: OVH.deskaas.user.StateEnum;
        userId?: number;
    }
    //deskaas.deskaas
    // fullName: deskaas.deskaas.deskaas
    export interface deskaas {
        alias?: string;
        dataDisk?: OVH.complexType.UnitAndValue<number>;
        ip?: string;
        os?: string;
        planCode?: string;
        ram?: OVH.complexType.UnitAndValue<number>;
        reference?: string;
        serviceName?: string;
        state?: OVH.deskaas.StateEnum;
        url?: string;
        vcpu?: number;
    }
    //deskaas.passwordPolicy
    // fullName: deskaas.passwordPolicy.passwordPolicy
    export interface passwordPolicy {
        deniedChars?: string[];
        digitMandatory?: boolean;
        letterMandatory?: boolean;
        lowercaseLetterMandatory?: boolean;
        maxLength?: number;
        minLength?: number;
        specialMandatory?: boolean;
        uppercaseLetterMandatory?: boolean;
    }
    export namespace user {
        //deskaas.user.ActivationStateEnum
        export type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable"
        //deskaas.user.StateEnum
        export type StateEnum = "creating" | "deleting" | "delivered" | "error"
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
// Apis harmony
// path /deskaas
export interface Deskaas {
    // GET /deskaas
    GET(): Promise<string[]>;
    [keys: string]: {
        // GET /deskaas/{serviceName}
        GET(): Promise<deskaas.deskaas>;
        upgrade:  {
            // POST /deskaas/{serviceName}/upgrade
            POST(body?: {planCode?: string, newReference?: string}): Promise<deskaas.Task>;
        }
        reboot:  {
            // POST /deskaas/{serviceName}/reboot
            POST(): Promise<deskaas.Task>;
        }
        task:  {
            // GET /deskaas/{serviceName}/task
            GET(param?: {state?: deskaas.TaskStateEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /deskaas/{serviceName}/task/{taskId}
                GET(): Promise<deskaas.Task>;
            } | any
        }
        passwordPolicy:  {
            // GET /deskaas/{serviceName}/passwordPolicy
            GET(): Promise<deskaas.passwordPolicy>;
        }
        serviceInfos:  {
            // GET /deskaas/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /deskaas/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        terminate:  {
            // POST /deskaas/{serviceName}/terminate
            POST(): Promise<string>;
        }
        console:  {
            // POST /deskaas/{serviceName}/console
            POST(): Promise<deskaas.Task>;
        }
        confirmTermination:  {
            // POST /deskaas/{serviceName}/confirmTermination
            POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
        }
        user:  {
            // GET /deskaas/{serviceName}/user
            GET(): Promise<deskaas.User>;
            changeProperties:  {
                // POST /deskaas/{serviceName}/user/changeProperties
                POST(body?: {email?: string}): Promise<deskaas.Task>;
            }
            task:  {
                // GET /deskaas/{serviceName}/user/task
                GET(param?: {state?: deskaas.TaskStateEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /deskaas/{serviceName}/user/task/{taskId}
                    GET(): Promise<deskaas.Task>;
                } | any
            }
            changePassword:  {
                // POST /deskaas/{serviceName}/user/changePassword
                POST(body?: {password?: string}): Promise<deskaas.Task>;
            }
        }
        refresh:  {
            // POST /deskaas/{serviceName}/refresh
            POST(): Promise<deskaas.Task>;
        }
        changeContact:  {
            // POST /deskaas/{serviceName}/changeContact
            POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
        }
        changeAlias:  {
            // POST /deskaas/{serviceName}/changeAlias
            POST(body?: {alias: string}): Promise<deskaas.Task>;
        }
    } | any
}
// Api
type PathsDeskaasGET = '/deskaas/{serviceName}/task/{taskId}' |
  '/deskaas/{serviceName}/task' |
  '/deskaas/{serviceName}/passwordPolicy' |
  '/deskaas/{serviceName}/serviceInfos' |
  '/deskaas/{serviceName}' |
  '/deskaas/{serviceName}/user' |
  '/deskaas/{serviceName}/user/task/{taskId}' |
  '/deskaas/{serviceName}/user/task' |
  '/deskaas';

type PathsDeskaasPUT = '/deskaas/{serviceName}/serviceInfos';

type PathsDeskaasPOST = '/deskaas/{serviceName}/upgrade' |
  '/deskaas/{serviceName}/reboot' |
  '/deskaas/{serviceName}/terminate' |
  '/deskaas/{serviceName}/console' |
  '/deskaas/{serviceName}/confirmTermination' |
  '/deskaas/{serviceName}/user/changeProperties' |
  '/deskaas/{serviceName}/user/changePassword' |
  '/deskaas/{serviceName}/refresh' |
  '/deskaas/{serviceName}/changeContact' |
  '/deskaas/{serviceName}/changeAlias';

export class ApiDeskaas extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the DESKAAS service
   * List available services
   */
  public get(path: '/deskaas'): Promise<string[]>;
  /**
   * Desktop As A Service
   * Get this object properties
   */
  public get(path: '/deskaas/{serviceName}', params: {serviceName: string}): Promise<deskaas.deskaas>;
  /**
   * passwordPolicy operations
   * Get the current password policy for your Desktop As A Service
   */
  public get(path: '/deskaas/{serviceName}/passwordPolicy', params: {serviceName: string}): Promise<deskaas.passwordPolicy>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/deskaas/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the deskaas.Task objects
   * Tasks associated with this Desktop As A Service
   */
  public get(path: '/deskaas/{serviceName}/task', params: {serviceName: string, state?: OVH.deskaas.TaskStateEnum}): Promise<number[]>;
  /**
   * Operation on a Desktop As A Service component
   * Get this object properties
   */
  public get(path: '/deskaas/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<deskaas.Task>;
  /**
   * Desktop As A Service User
   * Get this object properties
   */
  public get(path: '/deskaas/{serviceName}/user', params: {serviceName: string}): Promise<deskaas.User>;
  /**
   * List the deskaas.Task objects
   * Tasks associated with this User
   */
  public get(path: '/deskaas/{serviceName}/user/task', params: {serviceName: string, state?: OVH.deskaas.TaskStateEnum}): Promise<number[]>;
  /**
   * Operation on a Desktop As A Service component
   * Get this object properties
   */
  public get(path: '/deskaas/{serviceName}/user/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<deskaas.Task>;
  public get(path: PathsDeskaasGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/deskaas/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsDeskaasPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeAlias operations
   * Change the Virtual Desktop alias
   */
  public post(path: '/deskaas/{serviceName}/changeAlias', params: {serviceName: string, alias: string}): Promise<deskaas.Task>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/deskaas/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/deskaas/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * console operations
   * New console access
   */
  public post(path: '/deskaas/{serviceName}/console', params: {serviceName: string}): Promise<deskaas.Task>;
  /**
   * reboot operations
   * Reboot the Operating system of the Cloud Desktop.
   */
  public post(path: '/deskaas/{serviceName}/reboot', params: {serviceName: string}): Promise<deskaas.Task>;
  /**
   * refresh operations
   * Refresh the Operating system of the Desktop As A Service. All your personnal data are kept.
   */
  public post(path: '/deskaas/{serviceName}/refresh', params: {serviceName: string}): Promise<deskaas.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/deskaas/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * upgrade operations
   * Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop
   */
  public post(path: '/deskaas/{serviceName}/upgrade', params: {serviceName: string, newReference?: string, planCode?: string}): Promise<deskaas.Task>;
  /**
   * changePassword operations
   * Change Desktop As A Service user password
   */
  public post(path: '/deskaas/{serviceName}/user/changePassword', params: {serviceName: string, password?: string}): Promise<deskaas.Task>;
  /**
   * changeProperties operations
   * Change Desktop As A Service user properties
   */
  public post(path: '/deskaas/{serviceName}/user/changeProperties', params: {serviceName: string, email?: string}): Promise<deskaas.Task>;
  public post(path: PathsDeskaasPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
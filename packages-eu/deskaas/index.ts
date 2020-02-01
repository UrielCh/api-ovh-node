import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /deskaas Models
 * Source: https://eu.api.ovh.com/1.0/deskaas.json
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
        state: deskaasTaskStateEnum;
        taskId: number;
    }
    // type fullname: deskaas.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    // interface fullName: deskaas.User.User
    export interface User {
        activationState: deskaasuserActivationStateEnum;
        email: string;
        name: string;
        state: deskaasuserStateEnum;
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
        state: deskaasStateEnum;
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
            $get(params?: {state?: deskaasTaskStateEnum}): Promise<number[]>;
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
                $get(params?: {state?: deskaasTaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /deskaas/{serviceName}/user/task/{taskId}
                    $get(): Promise<deskaas.Task>;
                };
            }
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type deskaasTaskStateEnum = deskaas.TaskStateEnum;
type deskaasuserActivationStateEnum = deskaas.user.ActivationStateEnum;
type deskaasuserStateEnum = deskaas.user.StateEnum;
type deskaasStateEnum = deskaas.StateEnum;

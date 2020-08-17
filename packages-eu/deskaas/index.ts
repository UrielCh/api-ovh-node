import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /deskaas Models
 * Source: https://eu.api.ovh.com/1.0/deskaas.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace deskaas {
    /**
     * All states a Desktop As A Service can be in
     * type fullname: deskaas.StateEnum
     */
    export type StateEnum = "available" | "delivered" | "disabled" | "error" | "reserved"
    /**
     * Operation on a Desktop As A Service component
     * interface fullName: deskaas.Task.Task
     */
    export interface Task {
        description?: string;
        lastModificationDate?: string;
        name: string;
        progress: number;
        state: deskaasTaskStateEnum;
        taskId: number;
    }
    /**
     * All states a Desktop As A Service Task can be in
     * type fullname: deskaas.TaskStateEnum
     */
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    /**
     * Desktop As A Service User
     * interface fullName: deskaas.User.User
     */
    export interface User {
        activationState: deskaasuserActivationStateEnum;
        email: string;
        name: string;
        state: deskaasuserStateEnum;
        userId: number;
    }
    /**
     * Desktop As A Service
     * interface fullName: deskaas.deskaas.deskaas
     */
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
    /**
     * A structure describing the current password policy for your Dedicated Cloud
     * interface fullName: deskaas.passwordPolicy.passwordPolicy
     */
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
        /**
         * All activation states a Dedicated Cloud User can have
         * type fullname: deskaas.user.ActivationStateEnum
         */
        export type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable"
        /**
         * All states a Dedicated Cloud User can be in
         * type fullname: deskaas.user.StateEnum
         */
        export type StateEnum = "creating" | "deleting" | "delivered" | "error"
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
 * Api model for /deskaas
 */
export interface Deskaas {
    /**
     * List available services
     * GET /deskaas
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /deskaas/{serviceName}
         */
        $get(): Promise<deskaas.deskaas>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        changeAlias: {
            /**
             * Change the Virtual Desktop alias
             * POST /deskaas/{serviceName}/changeAlias
             */
            $post(params: { alias: string }): Promise<deskaas.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /deskaas/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /deskaas/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        console: {
            /**
             * New console access
             * POST /deskaas/{serviceName}/console
             */
            $post(): Promise<deskaas.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        passwordPolicy: {
            /**
             * Get the current password policy for your Desktop As A Service
             * GET /deskaas/{serviceName}/passwordPolicy
             */
            $get(): Promise<deskaas.passwordPolicy>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        reboot: {
            /**
             * Reboot the Operating system of the Cloud Desktop.
             * POST /deskaas/{serviceName}/reboot
             */
            $post(): Promise<deskaas.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        refresh: {
            /**
             * Refresh the Operating system of the Desktop As A Service. All your personnal data are kept.
             * POST /deskaas/{serviceName}/refresh
             */
            $post(): Promise<deskaas.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /deskaas/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /deskaas/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        task: {
            /**
             * Tasks associated with this Desktop As A Service
             * GET /deskaas/{serviceName}/task
             */
            $get(params?: { state?: deskaasTaskStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /deskaas/{serviceName}/task/{taskId}
                 */
                $get(): Promise<deskaas.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        terminate: {
            /**
             * Terminate your service
             * POST /deskaas/{serviceName}/terminate
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        upgrade: {
            /**
             * Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop
             * POST /deskaas/{serviceName}/upgrade
             */
            $post(params?: { newReference?: string, planCode?: string }): Promise<deskaas.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        user: {
            /**
             * Get this object properties
             * GET /deskaas/{serviceName}/user
             */
            $get(): Promise<deskaas.User>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changePassword: {
                /**
                 * Change Desktop As A Service user password
                 * POST /deskaas/{serviceName}/user/changePassword
                 */
                $post(params?: { password?: string }): Promise<deskaas.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeProperties: {
                /**
                 * Change Desktop As A Service user properties
                 * POST /deskaas/{serviceName}/user/changeProperties
                 */
                $post(params?: { email?: string }): Promise<deskaas.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * Tasks associated with this User
                 * GET /deskaas/{serviceName}/user/task
                 */
                $get(params?: { state?: deskaasTaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /deskaas/{serviceName}/user/task/{taskId}
                     */
                    $get(): Promise<deskaas.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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

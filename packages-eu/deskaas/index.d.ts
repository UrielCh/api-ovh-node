import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /deskaas Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace deskaas {
    type StateEnum = "available" | "delivered" | "disabled" | "error" | "reserved";
    interface Task {
        description?: string;
        lastModificationDate?: string;
        name: string;
        progress: number;
        state: deskaasTaskStateEnum;
        taskId: number;
    }
    type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo";
    interface User {
        activationState: deskaasuserActivationStateEnum;
        email: string;
        name: string;
        state: deskaasuserStateEnum;
        userId: number;
    }
    interface deskaas {
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
    interface passwordPolicy {
        deniedChars: string[];
        digitMandatory: boolean;
        letterMandatory: boolean;
        lowercaseLetterMandatory: boolean;
        maxLength: number;
        minLength: number;
        specialMandatory: boolean;
        uppercaseLetterMandatory: boolean;
    }
    namespace user {
        type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable";
        type StateEnum = "creating" | "deleting" | "delivered" | "error";
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
}
export declare namespace services {
    interface Service {
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
export declare function proxyDeskaas(ovhEngine: OvhRequestable): Deskaas;
export default proxyDeskaas;
/**
 * Api Proxy model
 */ export interface Deskaas {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<deskaas.deskaas>;
        changeAlias: {
            $post(params: {
                alias: string;
            }): Promise<deskaas.Task>;
        };
        changeContact: {
            $post(params?: {
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
            }): Promise<number[]>;
        };
        confirmTermination: {
            $post(params: {
                commentary?: string;
                futureUse?: service.TerminationFutureUseEnum;
                reason?: service.TerminationReasonEnum;
                token: string;
            }): Promise<string>;
        };
        console: {
            $post(): Promise<deskaas.Task>;
        };
        passwordPolicy: {
            $get(): Promise<deskaas.passwordPolicy>;
        };
        reboot: {
            $post(): Promise<deskaas.Task>;
        };
        refresh: {
            $post(): Promise<deskaas.Task>;
        };
        serviceInfos: {
            $get(): Promise<services.Service>;
            $put(params?: {
                canDeleteAtExpiration?: boolean;
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
                creation?: string;
                domain?: string;
                engagedUpTo?: string;
                expiration?: string;
                possibleRenewPeriod?: number[];
                renew?: service.RenewType;
                renewalType?: service.RenewalTypeEnum;
                serviceId?: number;
                status?: service.StateEnum;
            }): Promise<void>;
        };
        task: {
            $get(params?: {
                state?: deskaasTaskStateEnum;
            }): Promise<number[]>;
            $(taskId: number): {
                $get(): Promise<deskaas.Task>;
            };
        };
        terminate: {
            $post(): Promise<string>;
        };
        upgrade: {
            $post(params?: {
                newReference?: string;
                planCode?: string;
            }): Promise<deskaas.Task>;
        };
        user: {
            $get(): Promise<deskaas.User>;
            changePassword: {
                $post(params?: {
                    password?: string;
                }): Promise<deskaas.Task>;
            };
            changeProperties: {
                $post(params?: {
                    email?: string;
                }): Promise<deskaas.Task>;
            };
            task: {
                $get(params?: {
                    state?: deskaasTaskStateEnum;
                }): Promise<number[]>;
                $(taskId: number): {
                    $get(): Promise<deskaas.Task>;
                };
            };
        };
    };
    /**
     * Operations about the DESKAAS service
     * List available services
     */
    get(path: '/deskaas'): () => Promise<string[]>;
    /**
     * Desktop As A Service
     * Get this object properties
     */
    get(path: '/deskaas/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<deskaas.deskaas>;
    /**
     * passwordPolicy operations
     * Get the current password policy for your Desktop As A Service
     */
    get(path: '/deskaas/{serviceName}/passwordPolicy'): (params: {
        serviceName: string;
    }) => Promise<deskaas.passwordPolicy>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/deskaas/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the deskaas.Task objects
     * Tasks associated with this Desktop As A Service
     */
    get(path: '/deskaas/{serviceName}/task'): (params: {
        serviceName: string;
        state?: deskaasTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Desktop As A Service component
     * Get this object properties
     */
    get(path: '/deskaas/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<deskaas.Task>;
    /**
     * Desktop As A Service User
     * Get this object properties
     */
    get(path: '/deskaas/{serviceName}/user'): (params: {
        serviceName: string;
    }) => Promise<deskaas.User>;
    /**
     * List the deskaas.Task objects
     * Tasks associated with this User
     */
    get(path: '/deskaas/{serviceName}/user/task'): (params: {
        serviceName: string;
        state?: deskaasTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Desktop As A Service component
     * Get this object properties
     */
    get(path: '/deskaas/{serviceName}/user/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<deskaas.Task>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/deskaas/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * changeAlias operations
     * Change the Virtual Desktop alias
     */
    post(path: '/deskaas/{serviceName}/changeAlias'): (params: {
        serviceName: string;
        alias: string;
    }) => Promise<deskaas.Task>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/deskaas/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/deskaas/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * console operations
     * New console access
     */
    post(path: '/deskaas/{serviceName}/console'): (params: {
        serviceName: string;
    }) => Promise<deskaas.Task>;
    /**
     * reboot operations
     * Reboot the Operating system of the Cloud Desktop.
     */
    post(path: '/deskaas/{serviceName}/reboot'): (params: {
        serviceName: string;
    }) => Promise<deskaas.Task>;
    /**
     * refresh operations
     * Refresh the Operating system of the Desktop As A Service. All your personnal data are kept.
     */
    post(path: '/deskaas/{serviceName}/refresh'): (params: {
        serviceName: string;
    }) => Promise<deskaas.Task>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/deskaas/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * upgrade operations
     * Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop
     */
    post(path: '/deskaas/{serviceName}/upgrade'): (params: {
        serviceName: string;
        newReference?: string;
        planCode?: string;
    }) => Promise<deskaas.Task>;
    /**
     * changePassword operations
     * Change Desktop As A Service user password
     */
    post(path: '/deskaas/{serviceName}/user/changePassword'): (params: {
        serviceName: string;
        password?: string;
    }) => Promise<deskaas.Task>;
    /**
     * changeProperties operations
     * Change Desktop As A Service user properties
     */
    post(path: '/deskaas/{serviceName}/user/changeProperties'): (params: {
        serviceName: string;
        email?: string;
    }) => Promise<deskaas.Task>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type deskaasTaskStateEnum = deskaas.TaskStateEnum;
declare type deskaasuserActivationStateEnum = deskaas.user.ActivationStateEnum;
declare type deskaasuserStateEnum = deskaas.user.StateEnum;
declare type deskaasStateEnum = deskaas.StateEnum;

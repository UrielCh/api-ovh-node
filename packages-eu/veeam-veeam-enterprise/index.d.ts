import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /veeam/veeamEnterprise Models
 */
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
export declare namespace veeam {
    namespace veeamEnterprise {
        interface Account {
            ip?: string;
            port?: number;
            serviceName: string;
            sourceIp: string;
        }
        interface Task {
            endDate?: string;
            name: string;
            progress: number;
            startDate?: string;
            state: veeamEnterpriseTaskStateEnum;
            taskId: number;
        }
    }
}
export declare namespace veeamEnterprise {
    type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "toCreate" | "todo" | "unfixed" | "waiting" | "waitingForChilds";
}
/**
 * END API /veeam/veeamEnterprise Models
 */
export declare function proxyVeeamVeeamEnterprise(ovhEngine: OvhRequestable): Veeam;
export default proxyVeeamVeeamEnterprise;
/**
 * Api Proxy model
 */ export interface Veeam {
    veeamEnterprise: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<veeam.veeamEnterprise.Account>;
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            register: {
                $post(params: {
                    ip: string;
                    password: string;
                    port: number;
                    username: string;
                }): Promise<veeam.veeamEnterprise.Task[]>;
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
                    name?: string;
                    state?: veeamEnterpriseTaskStateEnum;
                }): Promise<number[]>;
                $(taskId: number): {
                    $get(): Promise<veeam.veeamEnterprise.Task>;
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
            update: {
                $post(params: {
                    ip: string;
                    password: string;
                    port: number;
                    username: string;
                }): Promise<veeam.veeamEnterprise.Task[]>;
            };
        };
    };
    /**
     * Operations about the VEEAMENTERPRISE service
     * List available services
     */
    get(path: '/veeam/veeamEnterprise'): () => Promise<string[]>;
    /**
     * Veeeam Enterprise offer
     * Get this object properties
     */
    get(path: '/veeam/veeamEnterprise/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<veeam.veeamEnterprise.Account>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the veeam.veeamEnterprise.Task objects
     * Tasks associated with Veeam Enterprise
     */
    get(path: '/veeam/veeamEnterprise/{serviceName}/task'): (params: {
        serviceName: string;
        name?: string;
        state?: veeamEnterpriseTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation with the Enterprise Account
     * Get this object properties
     */
    get(path: '/veeam/veeamEnterprise/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<veeam.veeamEnterprise.Task>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/veeam/veeamEnterprise/{serviceName}/serviceInfos'): (params: {
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
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/veeam/veeamEnterprise/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * register operations
     * Register Veeam Backup Server to Veeam Enterprise
     */
    post(path: '/veeam/veeamEnterprise/{serviceName}/register'): (params: {
        serviceName: string;
        ip: string;
        password: string;
        port: number;
        username: string;
    }) => Promise<veeam.veeamEnterprise.Task[]>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/veeam/veeamEnterprise/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * update operations
     * Update Veeam enterprise configuration
     */
    post(path: '/veeam/veeamEnterprise/{serviceName}/update'): (params: {
        serviceName: string;
        ip: string;
        password: string;
        port: number;
        username: string;
    }) => Promise<veeam.veeamEnterprise.Task[]>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type veeamEnterpriseTaskStateEnum = veeamEnterprise.TaskStateEnum;

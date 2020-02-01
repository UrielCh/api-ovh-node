import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /veeam/veeamEnterprise Models
 * Source: https://api.us.ovhcloud.com/1.0/veeam/veeamEnterprise.json
 */
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
export namespace veeam {
    export namespace veeamEnterprise {
        // interface fullName: veeam.veeamEnterprise.Account.Account
        export interface Account {
            ip?: string;
            port?: number;
            serviceName: string;
            sourceIp: string;
        }
        // interface fullName: veeam.veeamEnterprise.Task.Task
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
    // type fullname: veeamEnterprise.TaskStateEnum
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
export interface Veeam {
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
                $get(params?: {name?: string, state?: veeamEnterpriseTaskStateEnum}): Promise<number[]>;
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
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type veeamEnterpriseTaskStateEnum = veeamEnterprise.TaskStateEnum;

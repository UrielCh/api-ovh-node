import { buildOvhProxy } from '@ovh-api/common';
import { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /veeam/veeamEnterprise Models
 * Source: https://eu.api.ovh.com/1.0/veeam/veeamEnterprise.json
 */
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
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
export namespace veeam {
    export namespace veeamEnterprise {
        /**
         * Veeam Enterprise Plus
         * interface fullName: veeam.veeamEnterprise.Account.Account
         */
        export interface Account {
            activationStatus: veeamEnterpriseActivationStatusEnum;
            ip?: string;
            serviceName: string;
            sourceIp: string;
        }
        /**
         * Veeam Enterprise Plus
         * interface fullName: veeam.veeamEnterprise.AccountWithIAM.AccountWithIAM
         */
        export interface AccountWithIAM {
            activationStatus: veeamEnterpriseActivationStatusEnum;
            iam?: iam.ResourceMetadata;
            ip?: string;
            serviceName: string;
            sourceIp: string;
        }
        /**
         * Operation with the Enterprise Account
         * interface fullName: veeam.veeamEnterprise.Task.Task
         */
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
    /**
     * All possible states for a Veeam Enterprise activation status
     * type fullname: veeamEnterprise.ActivationStatusEnum
     */
    export type ActivationStatusEnum = "cancelled" | "doing" | "done" | "todo"
    /**
     * All possible states for a Veeam Enterprise Task
     * type fullname: veeamEnterprise.TaskStateEnum
     */
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
 * Api model for /veeam/veeamEnterprise
 */
export interface Veeam {
    veeamEnterprise: {
        /**
         * List Veeam Enterprise Plus services
         * GET /veeam/veeamEnterprise
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get Veeam Enterprise Plus
             * GET /veeam/veeamEnterprise/{serviceName}
             */
            $get(): Promise<veeam.veeamEnterprise.Account>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /veeam/veeamEnterprise/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            register: {
                /**
                 * Register Veeam backup server
                 * POST /veeam/veeamEnterprise/{serviceName}/register
                 */
                $post(params: { ip: string, password: string, username: string }): Promise<veeam.veeamEnterprise.Task[]>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /veeam/veeamEnterprise/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /veeam/veeamEnterprise/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            task: {
                /**
                 * List operations
                 * GET /veeam/veeamEnterprise/{serviceName}/task
                 */
                $get(params?: { name?: string, state?: veeamEnterpriseTaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get operation
                     * GET /veeam/veeamEnterprise/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<veeam.veeamEnterprise.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /veeam/veeamEnterprise/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
            update: {
                /**
                 * Update Veeam Enterprise Plus configuration
                 * POST /veeam/veeamEnterprise/{serviceName}/update
                 */
                $post(params: { ip: string, password: string, username: string }): Promise<veeam.veeamEnterprise.Task[]>;
            }
        };
    }
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type veeamEnterpriseActivationStatusEnum = veeamEnterprise.ActivationStatusEnum;
type veeamEnterpriseTaskStateEnum = veeamEnterprise.TaskStateEnum;

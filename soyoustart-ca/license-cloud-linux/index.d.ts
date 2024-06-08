import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/cloudLinux Models
 * Source: https://ca.api.soyoustart.com/1.0/license/cloudLinux.json
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
export namespace license {
    /**
     * A short description of what does the Task on your license
     * type fullname: license.ActionType
     */
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    /**
     * Allowed CloudLinux versions per matching serviceTypes
     * interface fullName: license.CloudLinuxOrderConfiguration.CloudLinuxOrderConfiguration
     */
    export interface CloudLinuxOrderConfiguration {
        orderableVersions: license.OrderableCloudLinuxCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    /**
     * All versions for CloudLinux product
     * type fullname: license.CloudLinuxVersionEnum
     */
    export type CloudLinuxVersionEnum = "SINGLE" | "WITH_CPANEL" | "WITH_PLESK12" | "cloudlinux-license"
    /**
     * Possible values for license type
     * type fullname: license.LicenseTypeEnum
     */
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    /**
     * All versions available for CloudLinux products
     * interface fullName: license.OrderableCloudLinuxCompatibilityInfos.OrderableCloudLinuxCompatibilityInfos
     */
    export interface OrderableCloudLinuxCompatibilityInfos {
        version: license.CloudLinuxVersionEnum;
    }
    /**
     * All states a license can be in
     * type fullname: license.StateEnum
     */
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    /**
     * licenses Todos
     * interface fullName: license.Task.Task
     */
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    /**
     * All states a license Task can be in
     * type fullname: license.TaskStateEnum
     */
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace cloudLinux {
        /**
         * Your CloudLinux license
         * interface fullName: license.cloudLinux.CloudLinux.CloudLinux
         */
        export interface CloudLinux {
            creation: string;
            domain: string;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.CloudLinuxVersionEnum;
        }
        /**
         * Your CloudLinux license
         * interface fullName: license.cloudLinux.CloudLinuxWithIAM.CloudLinuxWithIAM
         */
        export interface CloudLinuxWithIAM {
            creation: string;
            domain: string;
            iam?: iam.ResourceMetadata;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.CloudLinuxVersionEnum;
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
/**
 * Api model for /license/cloudLinux
 */
export interface License {
    cloudLinux: {
        /**
         * List available services
         * GET /license/cloudLinux
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        orderableVersions: {
            /**
             * Get the orderable CloudLinux versions
             * GET /license/cloudLinux/orderableVersions
             */
            $get(params: { ip: string }): Promise<license.CloudLinuxOrderConfiguration[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/cloudLinux/{serviceName}
             */
            $get(): Promise<license.cloudLinux.CloudLinux>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /license/cloudLinux/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /license/cloudLinux/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /license/cloudLinux/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            tasks: {
                /**
                 * Tasks linked to this license
                 * GET /license/cloudLinux/{serviceName}/tasks
                 */
                $get(params?: { action?: license.ActionType, status?: license.TaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /license/cloudLinux/{serviceName}/tasks/{taskId}
                     */
                    $get(): Promise<license.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /license/cloudLinux/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
}

export declare function proxyLicenseCloudLinux(ovhEngine: OvhRequestable): License;
export default proxyLicenseCloudLinux;

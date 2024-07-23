import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/directadmin Models
 * Source: https://ca.api.soyoustart.com/1.0/license/directadmin.json
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
     * Messages from change IP
     * type fullname: license.ChangeIpMessageEnum
     */
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    /**
     * License change ip status return
     * interface fullName: license.ChangeIpStatus.ChangeIpStatus
     */
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    /**
     * The serviceTypes allowed to Order a DirectAdmin version
     * interface fullName: license.DirectAdminOrderConfiguration.DirectAdminOrderConfiguration
     */
    export interface DirectAdminOrderConfiguration {
        orderableVersions: license.OrderableDirectAdminCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    /**
     * All operating systems available for DirectAdmin products
     * type fullname: license.DirectAdminOsEnum
     */
    export type DirectAdminOsEnum = "CentOs_5.0_32" | "CentOs_5.0_64" | "CentOs_6_32" | "CentOs_6_64" | "CentOs_7_64" | "CentOs_8_64" | "Debian_10.0_64" | "Debian_11.0_64" | "Debian_5.0_32" | "Debian_5.0_64" | "Debian_6.0_32" | "Debian_6.0_64" | "Debian_7.0_64" | "Debian_8.0_64" | "Debian_9.0_64" | "FreeBSD_11.x_64" | "FreeBSD_12.x_64" | "FreeBSD_7.x_32" | "FreeBSD_7.x_64" | "FreeBSD_8.x_64" | "FreeBSD_9.x_64"
    /**
     * All versions for DirectAdmin products
     * type fullname: license.DirectAdminVersionEnum
     */
    export type DirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    /**
     * Possible values for license type
     * type fullname: license.LicenseTypeEnum
     */
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    /**
     * All versions available for DirectAdmin products
     * interface fullName: license.OrderableDirectAdminCompatibilityInfos.OrderableDirectAdminCompatibilityInfos
     */
    export interface OrderableDirectAdminCompatibilityInfos {
        version: license.OrderableDirectAdminVersionEnum;
    }
    /**
     * All versions available for DirectAdmin products
     * type fullname: license.OrderableDirectAdminVersionEnum
     */
    export type OrderableDirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
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
    export namespace directadmin {
        /**
         * Your DirectAdmin license
         * interface fullName: license.directadmin.DirectAdmin.DirectAdmin
         */
        export interface DirectAdmin {
            clientId: number;
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            ip: string;
            licenseId: string;
            os: license.DirectAdminOsEnum;
            status: license.StateEnum;
            version: license.DirectAdminVersionEnum;
        }
        /**
         * Your DirectAdmin license
         * interface fullName: license.directadmin.DirectAdminWithIAM.DirectAdminWithIAM
         */
        export interface DirectAdminWithIAM {
            clientId: number;
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            iam?: iam.ResourceMetadata;
            ip: string;
            licenseId: string;
            os: license.DirectAdminOsEnum;
            status: license.StateEnum;
            version: license.DirectAdminVersionEnum;
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
 * Api model for /license/directadmin
 */
export interface License {
    directadmin: {
        /**
         * List available services
         * GET /license/directadmin
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        orderableVersions: {
            /**
             * Get the orderable DirectAdmin versions
             * GET /license/directadmin/orderableVersions
             */
            $get(params: { ip: string }): Promise<license.DirectAdminOrderConfiguration[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/directadmin/{serviceName}
             */
            $get(): Promise<license.directadmin.DirectAdmin>;
            /**
             * Alter this object properties
             * PUT /license/directadmin/{serviceName}
             */
            $put(params?: { clientId?: number, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, os?: license.DirectAdminOsEnum, status?: license.StateEnum, version?: license.DirectAdminVersionEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            allowedDestinationIp: {
                /**
                 * Returns an array of ips where the license can be moved to
                 * GET /license/directadmin/{serviceName}/allowedDestinationIp
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canLicenseBeMovedTo: {
                /**
                 * Will tell if the ip can accept the license
                 * GET /license/directadmin/{serviceName}/canLicenseBeMovedTo
                 */
                $get(params: { destinationIp: string }): Promise<license.ChangeIpStatus>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            changeIp: {
                /**
                 * Move this license to another Ip
                 * POST /license/directadmin/{serviceName}/changeIp
                 */
                $post(params: { destinationIp: string }): Promise<license.Task>;
            }
            changeOs: {
                /**
                 * Change the Operating System for a license
                 * POST /license/directadmin/{serviceName}/changeOs
                 */
                $post(params: { os: license.DirectAdminOsEnum }): Promise<license.Task>;
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /license/directadmin/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /license/directadmin/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /license/directadmin/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            tasks: {
                /**
                 * tasks linked to this license
                 * GET /license/directadmin/{serviceName}/tasks
                 */
                $get(params?: { action?: license.ActionType, status?: license.TaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /license/directadmin/{serviceName}/tasks/{taskId}
                     */
                    $get(): Promise<license.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /license/directadmin/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
}

export declare function proxyLicenseDirectadmin(ovhEngine: OvhRequestable): License;
export default proxyLicenseDirectadmin;

import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/worklight Models
 * Source: https://eu.api.kimsufi.com/1.0/license/worklight.json
 */
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
     * Possible values for license type
     * type fullname: license.LicenseTypeEnum
     */
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    /**
     * All versions available for WorkLight products
     * interface fullName: license.OrderableWorkLightCompatibilityInfos.OrderableWorkLightCompatibilityInfos
     */
    export interface OrderableWorkLightCompatibilityInfos {
        version: license.WorkLightVersionEnum;
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
    /**
     * Allowed WorkLight versions per matching serviceTypes
     * interface fullName: license.WorkLightOrderConfiguration.WorkLightOrderConfiguration
     */
    export interface WorkLightOrderConfiguration {
        orderableVersions: license.OrderableWorkLightCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    /**
     * All versions for WorkLight product
     * type fullname: license.WorkLightVersionEnum
     */
    export type WorkLightVersionEnum = "VERSION-6.1U.1CPU" | "VERSION-6.1U.2CPU" | "VERSION-6.2U.1CPU" | "VERSION-6.2U.2CPU" | "VERSION-6.EVALUATION" | "worklight-license-version-6-1cpu-1u" | "worklight-license-version-6-1cpu-2u" | "worklight-license-version-6-2cpu-1u" | "worklight-license-version-6-2cpu-2u"
    export namespace worklight {
        /**
         * Your WorkLight license
         * interface fullName: license.worklight.WorkLight.WorkLight
         */
        export interface WorkLight {
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.WorkLightVersionEnum;
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
 * END API /license/worklight Models
 */
export function proxyLicenseWorklight(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseWorklight;
/**
 * Api model for /license/worklight
 */
export interface License {
    worklight: {
        /**
         * List available services
         * GET /license/worklight
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        orderableVersions: {
            /**
             * Get the orderable WorkLight versions
             * GET /license/worklight/orderableVersions
             */
            $get(params: { ip: string }): Promise<license.WorkLightOrderConfiguration[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/worklight/{serviceName}
             */
            $get(): Promise<license.worklight.WorkLight>;
            /**
             * Alter this object properties
             * PUT /license/worklight/{serviceName}
             */
            $put(params?: { creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: license.StateEnum, version?: license.WorkLightVersionEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            allowedDestinationIp: {
                /**
                 * Returns an array of ips where the license can be moved to
                 * GET /license/worklight/{serviceName}/allowedDestinationIp
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canLicenseBeMovedTo: {
                /**
                 * Will tell if the ip can accept the license
                 * GET /license/worklight/{serviceName}/canLicenseBeMovedTo
                 */
                $get(params: { destinationIp: string }): Promise<license.ChangeIpStatus>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeIp: {
                /**
                 * Move this license to another Ip
                 * POST /license/worklight/{serviceName}/changeIp
                 */
                $post(params: { destinationIp: string }): Promise<license.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /license/worklight/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /license/worklight/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /license/worklight/{serviceName}/serviceInfos
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
                 * GET /license/worklight/{serviceName}/tasks
                 */
                $get(params?: { action?: license.ActionType, status?: license.TaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /license/worklight/{serviceName}/tasks/{taskId}
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
                 * Terminate your service
                 * POST /license/worklight/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}

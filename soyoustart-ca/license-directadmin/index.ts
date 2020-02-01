import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/directadmin Models
 * Source: https://ca.api.soyoustart.com/1.0/license/directadmin.json
 */
export namespace license {
    // type fullname: license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    // type fullname: license.ChangeIpMessageEnum
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    // interface fullName: license.ChangeIpStatus.ChangeIpStatus
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    // interface fullName: license.DirectAdminOrderConfiguration.DirectAdminOrderConfiguration
    export interface DirectAdminOrderConfiguration {
        orderableVersions: license.OrderableDirectAdminCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    // type fullname: license.DirectAdminOsEnum
    export type DirectAdminOsEnum = "CentOs_5.0_32" | "CentOs_5.0_64" | "CentOs_6_32" | "CentOs_6_64" | "CentOs_7_64" | "Debian_5.0_32" | "Debian_5.0_64" | "Debian_6.0_32" | "Debian_6.0_64" | "Debian_7.0_32" | "Debian_7.0_64" | "Debian_8.0_64" | "FreeBSD_7.x_32" | "FreeBSD_7.x_64" | "FreeBSD_8.x_64" | "FreeBSD_9.x_64"
    // type fullname: license.DirectAdminVersionEnum
    export type DirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    // type fullname: license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    // interface fullName: license.OrderableDirectAdminCompatibilityInfos.OrderableDirectAdminCompatibilityInfos
    export interface OrderableDirectAdminCompatibilityInfos {
        version: license.OrderableDirectAdminVersionEnum;
    }
    // type fullname: license.OrderableDirectAdminVersionEnum
    export type OrderableDirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    // type fullname: license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    // interface fullName: license.Task.Task
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    // type fullname: license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace directadmin {
        // interface fullName: license.directadmin.DirectAdmin.DirectAdmin
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
 * END API /license/directadmin Models
 */
export function proxyLicenseDirectadmin(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseDirectadmin;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License {
    directadmin: {
        // GET /license/directadmin
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/directadmin/orderableVersions
            $get(params: {ip: string}): Promise<license.DirectAdminOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/directadmin/{serviceName}
            $get(): Promise<license.directadmin.DirectAdmin>;
            // PUT /license/directadmin/{serviceName}
            $put(params?: {clientId?: number, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, os?: license.DirectAdminOsEnum, status?: license.StateEnum, version?: license.DirectAdminVersionEnum}): Promise<void>;
            allowedDestinationIp: {
                // GET /license/directadmin/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/directadmin/{serviceName}/canLicenseBeMovedTo
                $get(params: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/directadmin/{serviceName}/changeIp
                $post(params: {destinationIp: string}): Promise<license.Task>;
            }
            changeOs: {
                // POST /license/directadmin/{serviceName}/changeOs
                $post(params: {os: license.DirectAdminOsEnum}): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/directadmin/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /license/directadmin/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/directadmin/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            tasks: {
                // GET /license/directadmin/{serviceName}/tasks
                $get(params?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/directadmin/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/directadmin/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
}

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/virtuozzo Models
 * Source: https://eu.api.ovh.com/1.0/license/virtuozzo.json
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
    // type fullname: license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    // interface fullName: license.Option.Option
    export interface Option {
        amount?: string;
        canBeDeleted: boolean;
        expirationDate: string;
        label: license.OptionLabel;
        version?: string;
    }
    // type fullname: license.OptionLabel
    export type OptionLabel = "ANTISPAM_SPAMASSASSIN" | "ANTIVIRUS_DRWEB" | "ANTIVIRUS_KASPERSKY" | "DOMAINS" | "LANGUAGE_PACK" | "POWERPACK" | "SQL_SERVER" | "VIRTUOZZO_CONTAINERS"
    // interface fullName: license.OrderableVirtuozzoCompatibilityInfos.OrderableVirtuozzoCompatibilityInfos
    export interface OrderableVirtuozzoCompatibilityInfos {
        compliantContainers: license.OrderableVirtuozzoContainerNumberEnum[];
        potentialProblems: license.PotentialProblemVirtuozzoEnum[];
        version: license.OrderableVirtuozzoVersionEnum;
    }
    // type fullname: license.OrderableVirtuozzoContainerNumberEnum
    export type OrderableVirtuozzoContainerNumberEnum = "2_CPU_001_CONTAINER" | "2_CPU_003_CONTAINER" | "2_CPU_010_CONTAINER" | "2_CPU_030_CONTAINER" | "2_CPU_060_CONTAINER" | "2_CPU_100_CONTAINER"
    // type fullname: license.OrderableVirtuozzoVersionEnum
    export type OrderableVirtuozzoVersionEnum = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX" | "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS" | "virtuozzo-4" | "virtuozzo-4-for-windows"
    // type fullname: license.PotentialProblemVirtuozzoEnum
    export type PotentialProblemVirtuozzoEnum = "isLinuxOs" | "isOsVirtuozzo4Like" | "isWindowsOs"
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
    // type fullname: license.VirtuozzoContainerNumberEnum
    export type VirtuozzoContainerNumberEnum = "2_CPU_001_CONTAINER" | "2_CPU_003_CONTAINER" | "2_CPU_010_CONTAINER" | "2_CPU_030_CONTAINER" | "2_CPU_060_CONTAINER" | "2_CPU_100_CONTAINER"
    // interface fullName: license.VirtuozzoOrderConfiguration.VirtuozzoOrderConfiguration
    export interface VirtuozzoOrderConfiguration {
        orderableVersions: license.OrderableVirtuozzoCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    // type fullname: license.VirtuozzoVersionEnum
    export type VirtuozzoVersionEnum = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX" | "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"
    export namespace virtuozzo {
        // interface fullName: license.virtuozzo.Virtuozzo.Virtuozzo
        export interface Virtuozzo {
            containerNumber: license.VirtuozzoContainerNumberEnum;
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            informationKey?: string;
            ip: string;
            licenseId: string;
            productKey?: string;
            status: license.StateEnum;
            version: license.VirtuozzoVersionEnum;
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
 * END API /license/virtuozzo Models
 */
export function proxyLicenseVirtuozzo(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseVirtuozzo;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License{
    virtuozzo: {
        // GET /license/virtuozzo
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/virtuozzo/orderableVersions
            $get(params: {ip: string}): Promise<license.VirtuozzoOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/virtuozzo/{serviceName}
            $get(): Promise<license.virtuozzo.Virtuozzo>;
            // PUT /license/virtuozzo/{serviceName}
            $put(params?: {containerNumber?: license.VirtuozzoContainerNumberEnum, creation?: string, deleteAtExpiration?: boolean, domain?: string, informationKey?: string, ip?: string, licenseId?: string, productKey?: string, status?: license.StateEnum, version?: license.VirtuozzoVersionEnum}): Promise<void>;
            allowedDestinationIp: {
                // GET /license/virtuozzo/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/virtuozzo/{serviceName}/canLicenseBeMovedTo
                $get(params: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/virtuozzo/{serviceName}/changeIp
                $post(params: {destinationIp: string}): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/virtuozzo/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            option: {
                // GET /license/virtuozzo/{serviceName}/option
                $get(params?: {label?: license.OptionLabel}): Promise<license.OptionLabel[]>;
                $(label: license.OptionLabel): {
                    // DELETE /license/virtuozzo/{serviceName}/option/{label}
                    $delete(): Promise<license.Task>;
                    // GET /license/virtuozzo/{serviceName}/option/{label}
                    $get(): Promise<license.Option>;
                };
            }
            serviceInfos: {
                // GET /license/virtuozzo/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/virtuozzo/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            tasks: {
                // GET /license/virtuozzo/{serviceName}/tasks
                $get(params?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/virtuozzo/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/virtuozzo/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
}

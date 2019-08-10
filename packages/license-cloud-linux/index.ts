import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/cloudLinux Models
 */
export namespace license {
    // type fullname: license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    // interface fullName: license.CloudLinuxOrderConfiguration.CloudLinuxOrderConfiguration
    export interface CloudLinuxOrderConfiguration {
        orderableVersions: licenseOrderableCloudLinuxCompatibilityInfos[];
        serviceType: licenseLicenseTypeEnum;
    }
    // type fullname: license.CloudLinuxVersionEnum
    export type CloudLinuxVersionEnum = "SINGLE" | "WITH_CPANEL" | "WITH_PLESK12" | "cloudlinux-license"
    // type fullname: license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    // interface fullName: license.OrderableCloudLinuxCompatibilityInfos.OrderableCloudLinuxCompatibilityInfos
    export interface OrderableCloudLinuxCompatibilityInfos {
        version: licenseCloudLinuxVersionEnum;
    }
    // type fullname: license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    // interface fullName: license.Task.Task
    export interface Task {
        action: licenseActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: licenseTaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    // type fullname: license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace cloudLinux {
        // interface fullName: license.cloudLinux.CloudLinux.CloudLinux
        export interface CloudLinux {
            creation: string;
            domain: string;
            ip: string;
            licenseId: string;
            status: licenseStateEnum;
            version: licenseCloudLinuxVersionEnum;
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
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
        renew?: serviceRenewType;
        renewalType: serviceRenewalTypeEnum;
        serviceId: number;
        status: serviceStateEnum;
    }
}

/**
 * END API /license/cloudLinux Models
 */
export function proxyLicenseCloudLinux(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseCloudLinux;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License{
    cloudLinux: {
        // GET /license/cloudLinux
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/cloudLinux/orderableVersions
            $get(params: {ip: string}): Promise<license.CloudLinuxOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/cloudLinux/{serviceName}
            $get(): Promise<license.cloudLinux.CloudLinux>;
            confirmTermination: {
                // POST /license/cloudLinux/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /license/cloudLinux/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/cloudLinux/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}): Promise<void>;
            }
            tasks: {
                // GET /license/cloudLinux/{serviceName}/tasks
                $get(params?: {action?: licenseActionType, status?: licenseTaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/cloudLinux/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/cloudLinux/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
// Api
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/license/cloudLinux'): () => Promise<string[]>;
  /**
   * Your CloudLinux license
   * Get this object properties
   */
  get(path: '/license/cloudLinux/{serviceName}'): (params: {serviceName: string}) => Promise<license.cloudLinux.CloudLinux>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/license/cloudLinux/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the license.Task objects
   * Tasks linked to this license
   */
  get(path: '/license/cloudLinux/{serviceName}/tasks'): (params: {serviceName: string, action?: licenseActionType, status?: licenseTaskStateEnum}) => Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  get(path: '/license/cloudLinux/{serviceName}/tasks/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<license.Task>;
  /**
   * Get the orderable CloudLinux versions
   * Get the orderable CloudLinux versions
   */
  get(path: '/license/cloudLinux/orderableVersions'): (params: {ip: string}) => Promise<license.CloudLinuxOrderConfiguration[]>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/license/cloudLinux/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: serviceRenewType, renewalType?: serviceRenewalTypeEnum, serviceId?: number, status?: serviceStateEnum}) => Promise<void>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/license/cloudLinux/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/license/cloudLinux/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type licenseOrderableCloudLinuxCompatibilityInfos = license.OrderableCloudLinuxCompatibilityInfos;
type licenseLicenseTypeEnum = license.LicenseTypeEnum;
type licenseCloudLinuxVersionEnum = license.CloudLinuxVersionEnum;
type licenseActionType = license.ActionType;
type licenseTaskStateEnum = license.TaskStateEnum;
type licenseStateEnum = license.StateEnum;
type serviceRenewType = service.RenewType;
type serviceRenewalTypeEnum = service.RenewalTypeEnum;
type serviceStateEnum = service.StateEnum;

import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/cloudLinux Models
 */
export namespace license {
    //license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    //license.CloudLinuxOrderConfiguration
    // fullName: license.CloudLinuxOrderConfiguration.CloudLinuxOrderConfiguration
    export interface CloudLinuxOrderConfiguration {
        orderableVersions: license.OrderableCloudLinuxCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    //license.CloudLinuxVersionEnum
    export type CloudLinuxVersionEnum = "SINGLE" | "WITH_CPANEL" | "WITH_PLESK12" | "cloudlinux-license"
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.OrderableCloudLinuxCompatibilityInfos
    // fullName: license.OrderableCloudLinuxCompatibilityInfos.OrderableCloudLinuxCompatibilityInfos
    export interface OrderableCloudLinuxCompatibilityInfos {
        version: license.CloudLinuxVersionEnum;
    }
    //license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    //license.Task
    // fullName: license.Task.Task
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    //license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace cloudLinux {
        //license.cloudLinux.CloudLinux
        // fullName: license.cloudLinux.CloudLinux.CloudLinux
        export interface CloudLinux {
            creation: string;
            domain: string;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.CloudLinuxVersionEnum;
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
            $get(param?: {ip: string}): Promise<license.CloudLinuxOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/cloudLinux/{serviceName}
            $get(): Promise<license.cloudLinux.CloudLinux>;
            confirmTermination: {
                // POST /license/cloudLinux/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /license/cloudLinux/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/cloudLinux/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            tasks: {
                // GET /license/cloudLinux/{serviceName}/tasks
                $get(param?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
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
  get(path: '/license/cloudLinux/{serviceName}/tasks'): (params: {serviceName: string, action?: license.ActionType, status?: license.TaskStateEnum}) => Promise<number[]>;
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
  put(path: '/license/cloudLinux/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
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
 * classic Model
 */
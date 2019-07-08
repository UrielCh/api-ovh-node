import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/worklight Models
 */
export namespace license {
    //license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    //license.ChangeIpMessageEnum
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    //license.ChangeIpStatus
    // fullName: license.ChangeIpStatus.ChangeIpStatus
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.OrderableWorkLightCompatibilityInfos
    // fullName: license.OrderableWorkLightCompatibilityInfos.OrderableWorkLightCompatibilityInfos
    export interface OrderableWorkLightCompatibilityInfos {
        version: license.WorkLightVersionEnum;
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
    //license.WorkLightOrderConfiguration
    // fullName: license.WorkLightOrderConfiguration.WorkLightOrderConfiguration
    export interface WorkLightOrderConfiguration {
        orderableVersions: license.OrderableWorkLightCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    //license.WorkLightVersionEnum
    export type WorkLightVersionEnum = "VERSION-6.1U.1CPU" | "VERSION-6.1U.2CPU" | "VERSION-6.2U.1CPU" | "VERSION-6.2U.2CPU" | "VERSION-6.EVALUATION" | "worklight-license-version-6-1cpu-1u" | "worklight-license-version-6-1cpu-2u" | "worklight-license-version-6-2cpu-1u" | "worklight-license-version-6-2cpu-2u"
    export namespace worklight {
        //license.worklight.WorkLight
        // fullName: license.worklight.WorkLight.WorkLight
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
 * END API /license/worklight Models
 */
export function proxyLicenseWorklight(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseWorklight;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License{
    worklight: {
        // GET /license/worklight
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/worklight/orderableVersions
            $get(params?: {ip: string}): Promise<license.WorkLightOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/worklight/{serviceName}
            $get(): Promise<license.worklight.WorkLight>;
            // PUT /license/worklight/{serviceName}
            $put(params?: {creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: license.StateEnum, version?: license.WorkLightVersionEnum}): Promise<void>;
            allowedDestinationIp: {
                // GET /license/worklight/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/worklight/{serviceName}/canLicenseBeMovedTo
                $get(params?: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/worklight/{serviceName}/changeIp
                $post(params?: {destinationIp: string}): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/worklight/{serviceName}/confirmTermination
                $post(params?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /license/worklight/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/worklight/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            tasks: {
                // GET /license/worklight/{serviceName}/tasks
                $get(params?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/worklight/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/worklight/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
// Api
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/license/worklight'): () => Promise<string[]>;
  /**
   * Your WorkLight license
   * Get this object properties
   */
  get(path: '/license/worklight/{serviceName}'): (params: {serviceName: string}) => Promise<license.worklight.WorkLight>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  get(path: '/license/worklight/{serviceName}/allowedDestinationIp'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  get(path: '/license/worklight/{serviceName}/canLicenseBeMovedTo'): (params: {serviceName: string, destinationIp: string}) => Promise<license.ChangeIpStatus>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/license/worklight/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the license.Task objects
   * Tasks linked to this license
   */
  get(path: '/license/worklight/{serviceName}/tasks'): (params: {serviceName: string, action?: license.ActionType, status?: license.TaskStateEnum}) => Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  get(path: '/license/worklight/{serviceName}/tasks/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<license.Task>;
  /**
   * Get the orderable WorkLight versions
   * Get the orderable WorkLight versions
   */
  get(path: '/license/worklight/orderableVersions'): (params: {ip: string}) => Promise<license.WorkLightOrderConfiguration[]>;
  /**
   * Your WorkLight license
   * Alter this object properties
   */
  put(path: '/license/worklight/{serviceName}'): (params: {serviceName: string, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: license.StateEnum, version?: license.WorkLightVersionEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/license/worklight/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  post(path: '/license/worklight/{serviceName}/changeIp'): (params: {serviceName: string, destinationIp: string}) => Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/license/worklight/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/license/worklight/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
}
/**
 * classic Model
 */
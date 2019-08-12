import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /license/cpanel Models
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
    // interface fullName: license.CpanelOrderConfiguration.CpanelOrderConfiguration
    export interface CpanelOrderConfiguration {
        orderableVersions: license.OrderableCpanelCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    // type fullname: license.CpanelVersionEnum
    export type CpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps"
    // type fullname: license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    // interface fullName: license.OrderableCpanelCompatibilityInfos.OrderableCpanelCompatibilityInfos
    export interface OrderableCpanelCompatibilityInfos {
        version: license.OrderableCpanelVersionEnum;
    }
    // type fullname: license.OrderableCpanelVersionEnum
    export type OrderableCpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps"
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
    export namespace cpanel {
        // interface fullName: license.cpanel.Cpanel.Cpanel
        export interface Cpanel {
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.CpanelVersionEnum;
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
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /license/cpanel Models
 */
export function proxyLicenseCpanel(ovhEngine: OvhRequestable): License {
    return buildOvhProxy(ovhEngine, '/license');
}
export default proxyLicenseCpanel;
/**
 * Api Proxy model
 */// Apis harmony
// path /license
export interface License{
    cpanel: {
        // GET /license/cpanel
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/cpanel/orderableVersions
            $get(params: {ip: string}): Promise<license.CpanelOrderConfiguration[]>;
        }
        $(serviceName: string): {
            // GET /license/cpanel/{serviceName}
            $get(): Promise<license.cpanel.Cpanel>;
            // PUT /license/cpanel/{serviceName}
            $put(params?: {creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: license.StateEnum, version?: license.CpanelVersionEnum}): Promise<void>;
            allowedDestinationIp: {
                // GET /license/cpanel/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/cpanel/{serviceName}/canLicenseBeMovedTo
                $get(params: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/cpanel/{serviceName}/changeIp
                $post(params: {destinationIp: string}): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/cpanel/{serviceName}/confirmTermination
                $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /license/cpanel/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/cpanel/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            tasks: {
                // GET /license/cpanel/{serviceName}/tasks
                $get(params?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /license/cpanel/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                };
            }
            terminate: {
                // POST /license/cpanel/{serviceName}/terminate
                $post(): Promise<string>;
            }
        };
    }
// Api
  /**
   * Operations about the LICENSE service
   * List available services
   */
  get(path: '/license/cpanel'): () => Promise<string[]>;
  /**
   * Your Cpanel license
   * Get this object properties
   */
  get(path: '/license/cpanel/{serviceName}'): (params: {serviceName: string}) => Promise<license.cpanel.Cpanel>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  get(path: '/license/cpanel/{serviceName}/allowedDestinationIp'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  get(path: '/license/cpanel/{serviceName}/canLicenseBeMovedTo'): (params: {serviceName: string, destinationIp: string}) => Promise<license.ChangeIpStatus>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/license/cpanel/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the license.Task objects
   * tasks linked to this license
   */
  get(path: '/license/cpanel/{serviceName}/tasks'): (params: {serviceName: string, action?: license.ActionType, status?: license.TaskStateEnum}) => Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  get(path: '/license/cpanel/{serviceName}/tasks/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<license.Task>;
  /**
   * Get the orderable CPanel versions
   * Get the orderable CPanel versions
   */
  get(path: '/license/cpanel/orderableVersions'): (params: {ip: string}) => Promise<license.CpanelOrderConfiguration[]>;
  /**
   * Your Cpanel license
   * Alter this object properties
   */
  put(path: '/license/cpanel/{serviceName}'): (params: {serviceName: string, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: license.StateEnum, version?: license.CpanelVersionEnum}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/license/cpanel/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  post(path: '/license/cpanel/{serviceName}/changeIp'): (params: {serviceName: string, destinationIp: string}) => Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/license/cpanel/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/license/cpanel/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
}

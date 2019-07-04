import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace license {
    //license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    //license.ChangeIpMessageEnum
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    //license.ChangeIpStatus
    // fullName: license.ChangeIpStatus.ChangeIpStatus
    export interface ChangeIpStatus {
        message?: OVH.license.ChangeIpMessageEnum;
        success?: boolean;
    }
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.OrderableWorkLightCompatibilityInfos
    // fullName: license.OrderableWorkLightCompatibilityInfos.OrderableWorkLightCompatibilityInfos
    export interface OrderableWorkLightCompatibilityInfos {
        version?: OVH.license.WorkLightVersionEnum;
    }
    //license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    //license.Task
    // fullName: license.Task.Task
    export interface Task {
        action?: OVH.license.ActionType;
        doneDate?: string;
        lastUpdate?: string;
        name?: string;
        status?: OVH.license.TaskStateEnum;
        taskId?: number;
        todoDate?: string;
    }
    //license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    //license.WorkLightOrderConfiguration
    // fullName: license.WorkLightOrderConfiguration.WorkLightOrderConfiguration
    export interface WorkLightOrderConfiguration {
        orderableVersions?: OVH.license.OrderableWorkLightCompatibilityInfos[];
        serviceType?: OVH.license.LicenseTypeEnum;
    }
    //license.WorkLightVersionEnum
    export type WorkLightVersionEnum = "VERSION-6.1U.1CPU" | "VERSION-6.1U.2CPU" | "VERSION-6.2U.1CPU" | "VERSION-6.2U.2CPU" | "VERSION-6.EVALUATION" | "worklight-license-version-6-1cpu-1u" | "worklight-license-version-6-1cpu-2u" | "worklight-license-version-6-2cpu-1u" | "worklight-license-version-6-2cpu-2u"
    export namespace worklight {
        //license.worklight.WorkLight
        // fullName: license.worklight.WorkLight.WorkLight
        export interface WorkLight {
            creation?: string;
            deleteAtExpiration?: boolean;
            domain?: string;
            ip?: string;
            licenseId?: string;
            status?: OVH.license.StateEnum;
            version?: OVH.license.WorkLightVersionEnum;
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /license
export interface License {
    worklight:  {
        // GET /license/worklight
        $get(): Promise<string[]>;
        orderableVersions:  {
            // GET /license/worklight/orderableVersions
            $get(param?: {ip: string}): Promise<license.WorkLightOrderConfiguration[]>;
        }
        [keys: string]: {
            // GET /license/worklight/{serviceName}
            $get(): Promise<license.worklight.WorkLight>;
            // PUT /license/worklight/{serviceName}
            $put(body?: {body: license.worklight.WorkLight}): Promise<void>;
            allowedDestinationIp:  {
                // GET /license/worklight/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo:  {
                // GET /license/worklight/{serviceName}/canLicenseBeMovedTo
                $get(param?: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp:  {
                // POST /license/worklight/{serviceName}/changeIp
                $post(body?: {destinationIp: string}): Promise<license.Task>;
            }
            confirmTermination:  {
                // POST /license/worklight/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos:  {
                // GET /license/worklight/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/worklight/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            tasks:  {
                // GET /license/worklight/{serviceName}/tasks
                $get(param?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                [keys: string]: {
                    // GET /license/worklight/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                } | any
            }
            terminate:  {
                // POST /license/worklight/{serviceName}/terminate
                $post(): Promise<string>;
            }
        } | any
    }
}
// Api
type PathsLicenseWorklightGET = '/license/worklight/{serviceName}/canLicenseBeMovedTo' |
  '/license/worklight/{serviceName}' |
  '/license/worklight/{serviceName}/serviceInfos' |
  '/license/worklight/{serviceName}/tasks/{taskId}' |
  '/license/worklight/{serviceName}/tasks' |
  '/license/worklight/{serviceName}/allowedDestinationIp' |
  '/license/worklight/orderableVersions' |
  '/license/worklight';

type PathsLicenseWorklightPUT = '/license/worklight/{serviceName}' |
  '/license/worklight/{serviceName}/serviceInfos';

type PathsLicenseWorklightPOST = '/license/worklight/{serviceName}/terminate' |
  '/license/worklight/{serviceName}/changeIp' |
  '/license/worklight/{serviceName}/confirmTermination';

export class ApiLicenseWorklight extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/license/worklight'): Promise<string[]>;
  /**
   * Your WorkLight license
   * Get this object properties
   */
  public get(path: '/license/worklight/{serviceName}', params: {serviceName: string}): Promise<license.worklight.WorkLight>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  public get(path: '/license/worklight/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  public get(path: '/license/worklight/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<license.ChangeIpStatus>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/license/worklight/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the license.Task objects
   * Tasks linked to this license
   */
  public get(path: '/license/worklight/{serviceName}/tasks', params: {serviceName: string, action?: OVH.license.ActionType, status?: OVH.license.TaskStateEnum}): Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  public get(path: '/license/worklight/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: string}): Promise<license.Task>;
  /**
   * Get the orderable WorkLight versions
   * Get the orderable WorkLight versions
   */
  public get(path: '/license/worklight/orderableVersions', params: {ip: string}): Promise<license.WorkLightOrderConfiguration[]>;
  public get(path: PathsLicenseWorklightGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your WorkLight license
   * Alter this object properties
   */
  public put(path: '/license/worklight/{serviceName}', params: {serviceName: string, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: OVH.license.StateEnum, version?: OVH.license.WorkLightVersionEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/license/worklight/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsLicenseWorklightPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  public post(path: '/license/worklight/{serviceName}/changeIp', params: {serviceName: string, destinationIp: string}): Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/license/worklight/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/license/worklight/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseWorklightPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
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
    //license.CpanelOrderConfiguration
    // fullName: license.CpanelOrderConfiguration.CpanelOrderConfiguration
    export interface CpanelOrderConfiguration {
        orderableVersions?: OVH.license.OrderableCpanelCompatibilityInfos[];
        serviceType?: OVH.license.LicenseTypeEnum;
    }
    //license.CpanelVersionEnum
    export type CpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps"
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.OrderableCpanelCompatibilityInfos
    // fullName: license.OrderableCpanelCompatibilityInfos.OrderableCpanelCompatibilityInfos
    export interface OrderableCpanelCompatibilityInfos {
        version?: OVH.license.OrderableCpanelVersionEnum;
    }
    //license.OrderableCpanelVersionEnum
    export type OrderableCpanelVersionEnum = "VERSION_11_FOR_LINUX" | "VERSION_11_FOR_VIRTUOZZO" | "VERSION_11_FOR_VPS" | "cpanel-license-version-11" | "cpanel-license-version-11-for-virtuozzo" | "cpanel-license-version-11-for-vps"
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
    export namespace cpanel {
        //license.cpanel.Cpanel
        // fullName: license.cpanel.Cpanel.Cpanel
        export interface Cpanel {
            creation?: string;
            deleteAtExpiration?: boolean;
            domain?: string;
            ip?: string;
            licenseId?: string;
            status?: OVH.license.StateEnum;
            version?: OVH.license.CpanelVersionEnum;
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
    cpanel:  {
        // GET /license/cpanel
        GET(): Promise<string[]>;
        orderableVersions:  {
            // GET /license/cpanel/orderableVersions
            GET(param?: {ip: string}): Promise<license.CpanelOrderConfiguration[]>;
        }
        [keys: string]: {
            // GET /license/cpanel/{serviceName}
            GET(): Promise<license.cpanel.Cpanel>;
            // PUT /license/cpanel/{serviceName}
            PUT(body?: {body: license.cpanel.Cpanel}): Promise<void>;
            tasks:  {
                // GET /license/cpanel/{serviceName}/tasks
                GET(param?: {status?: license.TaskStateEnum, action?: license.ActionType}): Promise<number[]>;
                [keys: string]: {
                    // GET /license/cpanel/{serviceName}/tasks/{taskId}
                    GET(): Promise<license.Task>;
                } | any
            }
            changeIp:  {
                // POST /license/cpanel/{serviceName}/changeIp
                POST(body?: {destinationIp: string}): Promise<license.Task>;
            }
            confirmTermination:  {
                // POST /license/cpanel/{serviceName}/confirmTermination
                POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
            }
            canLicenseBeMovedTo:  {
                // GET /license/cpanel/{serviceName}/canLicenseBeMovedTo
                GET(param?: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            terminate:  {
                // POST /license/cpanel/{serviceName}/terminate
                POST(): Promise<string>;
            }
            allowedDestinationIp:  {
                // GET /license/cpanel/{serviceName}/allowedDestinationIp
                GET(): Promise<string[]>;
            }
            serviceInfos:  {
                // GET /license/cpanel/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /license/cpanel/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
        } | any
    }
}
// Api
type PathsLicenseCpanelGET = '/license/cpanel' |
  '/license/cpanel/orderableVersions' |
  '/license/cpanel/{serviceName}/tasks/{taskId}' |
  '/license/cpanel/{serviceName}/tasks' |
  '/license/cpanel/{serviceName}' |
  '/license/cpanel/{serviceName}/canLicenseBeMovedTo' |
  '/license/cpanel/{serviceName}/allowedDestinationIp' |
  '/license/cpanel/{serviceName}/serviceInfos';

type PathsLicenseCpanelPUT = '/license/cpanel/{serviceName}' |
  '/license/cpanel/{serviceName}/serviceInfos';

type PathsLicenseCpanelPOST = '/license/cpanel/{serviceName}/changeIp' |
  '/license/cpanel/{serviceName}/confirmTermination' |
  '/license/cpanel/{serviceName}/terminate';

export class ApiLicenseCpanel extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/license/cpanel'): Promise<string[]>;
  /**
   * Your Cpanel license
   * Get this object properties
   */
  public get(path: '/license/cpanel/{serviceName}', params: {serviceName: string}): Promise<license.cpanel.Cpanel>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  public get(path: '/license/cpanel/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  public get(path: '/license/cpanel/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<license.ChangeIpStatus>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/license/cpanel/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the license.Task objects
   * tasks linked to this license
   */
  public get(path: '/license/cpanel/{serviceName}/tasks', params: {serviceName: string, action?: OVH.license.ActionType, status?: OVH.license.TaskStateEnum}): Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  public get(path: '/license/cpanel/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: string}): Promise<license.Task>;
  /**
   * Get the orderable CPanel versions
   * Get the orderable CPanel versions
   */
  public get(path: '/license/cpanel/orderableVersions', params: {ip: string}): Promise<license.CpanelOrderConfiguration[]>;
  public get(path: PathsLicenseCpanelGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your Cpanel license
   * Alter this object properties
   */
  public put(path: '/license/cpanel/{serviceName}', params: {serviceName: string, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, status?: OVH.license.StateEnum, version?: OVH.license.CpanelVersionEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/license/cpanel/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsLicenseCpanelPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  public post(path: '/license/cpanel/{serviceName}/changeIp', params: {serviceName: string, destinationIp: string}): Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/license/cpanel/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/license/cpanel/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseCpanelPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
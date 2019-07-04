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
    //license.DirectAdminOrderConfiguration
    // fullName: license.DirectAdminOrderConfiguration.DirectAdminOrderConfiguration
    export interface DirectAdminOrderConfiguration {
        orderableVersions?: OVH.license.OrderableDirectAdminCompatibilityInfos[];
        serviceType?: OVH.license.LicenseTypeEnum;
    }
    //license.DirectAdminOsEnum
    export type DirectAdminOsEnum = "CentOs_5.0_32" | "CentOs_5.0_64" | "CentOs_6_32" | "CentOs_6_64" | "CentOs_7_64" | "Debian_5.0_32" | "Debian_5.0_64" | "Debian_6.0_32" | "Debian_6.0_64" | "Debian_7.0_32" | "Debian_7.0_64" | "Debian_8.0_64" | "FreeBSD_7.x_32" | "FreeBSD_7.x_64" | "FreeBSD_8.x_64" | "FreeBSD_9.x_64"
    //license.DirectAdminVersionEnum
    export type DirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.OrderableDirectAdminCompatibilityInfos
    // fullName: license.OrderableDirectAdminCompatibilityInfos.OrderableDirectAdminCompatibilityInfos
    export interface OrderableDirectAdminCompatibilityInfos {
        version?: OVH.license.OrderableDirectAdminVersionEnum;
    }
    //license.OrderableDirectAdminVersionEnum
    export type OrderableDirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
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
    export namespace directadmin {
        //license.directadmin.DirectAdmin
        // fullName: license.directadmin.DirectAdmin.DirectAdmin
        export interface DirectAdmin {
            clientId?: number;
            creation?: string;
            deleteAtExpiration?: boolean;
            domain?: string;
            ip?: string;
            licenseId?: string;
            os?: OVH.license.DirectAdminOsEnum;
            status?: OVH.license.StateEnum;
            version?: OVH.license.DirectAdminVersionEnum;
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
    directadmin:  {
        // GET /license/directadmin
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /license/directadmin/{serviceName}
            GET(): Promise<license.directadmin.DirectAdmin>;
            // PUT /license/directadmin/{serviceName}
            PUT(body?: {body: license.directadmin.DirectAdmin}): Promise<void>;
            terminate:  {
                // POST /license/directadmin/{serviceName}/terminate
                POST(): Promise<string>;
            }
            canLicenseBeMovedTo:  {
                // GET /license/directadmin/{serviceName}/canLicenseBeMovedTo
                GET(param?: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            confirmTermination:  {
                // POST /license/directadmin/{serviceName}/confirmTermination
                POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
            }
            allowedDestinationIp:  {
                // GET /license/directadmin/{serviceName}/allowedDestinationIp
                GET(): Promise<string[]>;
            }
            changeOs:  {
                // POST /license/directadmin/{serviceName}/changeOs
                POST(body?: {os: license.DirectAdminOsEnum}): Promise<license.Task>;
            }
            changeIp:  {
                // POST /license/directadmin/{serviceName}/changeIp
                POST(body?: {destinationIp: string}): Promise<license.Task>;
            }
            serviceInfos:  {
                // GET /license/directadmin/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /license/directadmin/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            tasks:  {
                // GET /license/directadmin/{serviceName}/tasks
                GET(param?: {status?: license.TaskStateEnum, action?: license.ActionType}): Promise<number[]>;
                [keys: string]: {
                    // GET /license/directadmin/{serviceName}/tasks/{taskId}
                    GET(): Promise<license.Task>;
                } | any
            }
        } | any
        orderableVersions:  {
            // GET /license/directadmin/orderableVersions
            GET(param?: {ip: string}): Promise<license.DirectAdminOrderConfiguration[]>;
        }
    }
}
// Api
type PathsLicenseDirectadminGET = '/license/directadmin/{serviceName}/canLicenseBeMovedTo' |
  '/license/directadmin/{serviceName}' |
  '/license/directadmin/{serviceName}/allowedDestinationIp' |
  '/license/directadmin/{serviceName}/serviceInfos' |
  '/license/directadmin/{serviceName}/tasks/{taskId}' |
  '/license/directadmin/{serviceName}/tasks' |
  '/license/directadmin/orderableVersions' |
  '/license/directadmin';

type PathsLicenseDirectadminPUT = '/license/directadmin/{serviceName}' |
  '/license/directadmin/{serviceName}/serviceInfos';

type PathsLicenseDirectadminPOST = '/license/directadmin/{serviceName}/terminate' |
  '/license/directadmin/{serviceName}/confirmTermination' |
  '/license/directadmin/{serviceName}/changeOs' |
  '/license/directadmin/{serviceName}/changeIp';

export class ApiLicenseDirectadmin extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/license/directadmin'): Promise<string[]>;
  /**
   * Your DirectAdmin license
   * Get this object properties
   */
  public get(path: '/license/directadmin/{serviceName}', params: {serviceName: string}): Promise<license.directadmin.DirectAdmin>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  public get(path: '/license/directadmin/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  public get(path: '/license/directadmin/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<license.ChangeIpStatus>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/license/directadmin/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the license.Task objects
   * tasks linked to this license
   */
  public get(path: '/license/directadmin/{serviceName}/tasks', params: {serviceName: string, action?: OVH.license.ActionType, status?: OVH.license.TaskStateEnum}): Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  public get(path: '/license/directadmin/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: string}): Promise<license.Task>;
  /**
   * Get the orderable DirectAdmin versions
   * Get the orderable DirectAdmin versions
   */
  public get(path: '/license/directadmin/orderableVersions', params: {ip: string}): Promise<license.DirectAdminOrderConfiguration[]>;
  public get(path: PathsLicenseDirectadminGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your DirectAdmin license
   * Alter this object properties
   */
  public put(path: '/license/directadmin/{serviceName}', params: {serviceName: string, clientId?: number, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, os?: OVH.license.DirectAdminOsEnum, status?: OVH.license.StateEnum, version?: OVH.license.DirectAdminVersionEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/license/directadmin/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsLicenseDirectadminPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  public post(path: '/license/directadmin/{serviceName}/changeIp', params: {serviceName: string, destinationIp: string}): Promise<license.Task>;
  /**
   * changeOs operations
   * Change the Operating System for a license
   */
  public post(path: '/license/directadmin/{serviceName}/changeOs', params: {serviceName: string, os: OVH.license.DirectAdminOsEnum}): Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/license/directadmin/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/license/directadmin/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseDirectadminPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}
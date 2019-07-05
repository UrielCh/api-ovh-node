import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    //dedicated.TaskFunctionEnum
    export type TaskFunctionEnum = "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    //dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace housing {
        //dedicated.housing.ApcOrderable
        // fullName: dedicated.housing.ApcOrderable.ApcOrderable
        export interface ApcOrderable {
            free: boolean;
            orderable: boolean;
        }
        //dedicated.housing.DatacenterEnum
        export type DatacenterEnum = "gsw" | "pdc1"
        //dedicated.housing.HaRoutingOfferEnum
        export type HaRoutingOfferEnum = "ha2x2" | "ha2x4"
        //dedicated.housing.HaRoutingOrderable
        // fullName: dedicated.housing.HaRoutingOrderable.HaRoutingOrderable
        export interface HaRoutingOrderable {
            offer: dedicated.housing.HaRoutingOfferEnum[];
            orderable: boolean;
        }
        //dedicated.housing.Housing
        // fullName: dedicated.housing.Housing.Housing
        export interface Housing {
            datacenter?: dedicated.housing.DatacenterEnum;
            name: string;
            network: dedicated.housing.NetworkInfo[];
            options: dedicated.housing.Options;
            rack: string;
            securityCode: string;
        }
        //dedicated.housing.IpInfo
        // fullName: dedicated.housing.IpInfo.IpInfo
        export interface IpInfo {
            gateway?: string;
            network: string;
            reservedAddresses?: string[];
        }
        //dedicated.housing.LinkInfo
        // fullName: dedicated.housing.LinkInfo.LinkInfo
        export interface LinkInfo {
            port: string;
            router: string;
        }
        //dedicated.housing.NetworkInfo
        // fullName: dedicated.housing.NetworkInfo.NetworkInfo
        export interface NetworkInfo {
            ipv4?: dedicated.housing.IpInfo;
            ipv6?: dedicated.housing.IpInfo;
            link?: dedicated.housing.LinkInfo;
        }
        //dedicated.housing.Options
        // fullName: dedicated.housing.Options.Options
        export interface Options {
            apcCount: number;
            handsneyes: boolean;
            highAvailabilityRouting: string;
        }
        //dedicated.housing.Task
        // fullName: dedicated.housing.Task.Task
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.housing.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
        }
        //dedicated.housing.TaskFunctionEnum
        export type TaskFunctionEnum = "applyBackupFtpAcls" | "applyBackupFtpQuota" | "changePasswordBackupFTP" | "createBackupFTP" | "migrateBackupFTP" | "removeBackupFTP"
    }
    export namespace server {
        //dedicated.server.BackupFtp
        // fullName: dedicated.server.BackupFtp.BackupFtp
        export interface BackupFtp {
            ftpBackupName: string;
            quota?: complexType.UnitAndValue<number>;
            readOnlyDate?: string;
            type: dedicated.server.BackupStorageTypeEnum;
            usage?: complexType.UnitAndValue<number>;
        }
        //dedicated.server.BackupFtpAcl
        // fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
        export interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        //dedicated.server.BackupStorageTypeEnum
        export type BackupStorageTypeEnum = "included" | "storage"
        //dedicated.server.Task
        // fullName: dedicated.server.Task.Task
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
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
// Apis harmony
// path /dedicated
export interface Dedicated{
    housing: {
        // GET /dedicated/housing
        $get(): Promise<string[]>;
        [keys: string]:{
            // GET /dedicated/housing/{serviceName}
            $get(): Promise<dedicated.housing.Housing>;
            features: {
                backupFTP: {
                    // DELETE /dedicated/housing/{serviceName}/features/backupFTP
                    $delete(): Promise<dedicated.server.Task>;
                    // GET /dedicated/housing/{serviceName}/features/backupFTP
                    $get(): Promise<dedicated.server.BackupFtp>;
                    // POST /dedicated/housing/{serviceName}/features/backupFTP
                    $post(): Promise<dedicated.server.Task>;
                    access: {
                        // GET /dedicated/housing/{serviceName}/features/backupFTP/access
                        $get(): Promise<string[]>;
                        // POST /dedicated/housing/{serviceName}/features/backupFTP/access
                        $post(body?: {cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean}): Promise<dedicated.server.Task>;
                        [keys: string]:{
                            // DELETE /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
                            $delete(): Promise<dedicated.server.Task>;
                            // GET /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
                            $get(): Promise<dedicated.server.BackupFtpAcl>;
                            // PUT /dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}
                            $put(body?: {body: dedicated.server.BackupFtpAcl}): Promise<void>;
                        } | any
                    }
                    authorizableBlocks: {
                        // GET /dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks
                        $get(): Promise<string[]>;
                    }
                    password: {
                        // POST /dedicated/housing/{serviceName}/features/backupFTP/password
                        $post(): Promise<dedicated.server.Task>;
                    }
                }
            }
            orderable: {
                APC: {
                    // GET /dedicated/housing/{serviceName}/orderable/APC
                    $get(): Promise<dedicated.housing.ApcOrderable>;
                }
            }
            serviceInfos: {
                // GET /dedicated/housing/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/housing/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            task: {
                // GET /dedicated/housing/{serviceName}/task
                $get(param?: {function_?: dedicated.housing.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                [keys: string]:{
                    // GET /dedicated/housing/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.housing.Task>;
                    cancel: {
                        // POST /dedicated/housing/{serviceName}/task/{taskId}/cancel
                        $post(): Promise<void>;
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsDedicatedHousingGET = '/dedicated/housing' |
  '/dedicated/housing/{serviceName}' |
  '/dedicated/housing/{serviceName}/features/backupFTP' |
  '/dedicated/housing/{serviceName}/features/backupFTP/access' |
  '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}' |
  '/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks' |
  '/dedicated/housing/{serviceName}/orderable/APC' |
  '/dedicated/housing/{serviceName}/serviceInfos' |
  '/dedicated/housing/{serviceName}/task' |
  '/dedicated/housing/{serviceName}/task/{taskId}';

type PathsDedicatedHousingPUT = '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}' |
  '/dedicated/housing/{serviceName}/serviceInfos';

type PathsDedicatedHousingPOST = '/dedicated/housing/{serviceName}/features/backupFTP' |
  '/dedicated/housing/{serviceName}/features/backupFTP/access' |
  '/dedicated/housing/{serviceName}/features/backupFTP/password' |
  '/dedicated/housing/{serviceName}/task/{taskId}/cancel';

type PathsDedicatedHousingDELETE = '/dedicated/housing/{serviceName}/features/backupFTP' |
  '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}';

export class ApiDedicatedHousing extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the HOUSING service
   * List available services
   */
  public get(path: '/dedicated/housing'): Promise<string[]>;
  /**
   * Housing bay
   * Get this object properties
   */
  public get(path: '/dedicated/housing/{serviceName}', params: {serviceName: string}): Promise<dedicated.housing.Housing>;
  /**
   * Backup Ftp assigned to this server
   * Get this object properties
   */
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP', params: {serviceName: string}): Promise<dedicated.server.BackupFtp>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
   */
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access', params: {serviceName: string}): Promise<string[]>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Get this object properties
   */
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', params: {ipBlock: string, serviceName: string}): Promise<dedicated.server.BackupFtpAcl>;
  /**
   * authorizableBlocks operations
   * Get all IP blocks that can be used in the ACL
   */
  public get(path: '/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks', params: {serviceName: string}): Promise<string[]>;
  /**
   * APC operations
   * Is an APC orderable for this housing bay
   */
  public get(path: '/dedicated/housing/{serviceName}/orderable/APC', params: {serviceName: string}): Promise<dedicated.housing.ApcOrderable>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/dedicated/housing/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the dedicated.housing.Task objects
   * View task list
   */
  public get(path: '/dedicated/housing/{serviceName}/task', params: {serviceName: string, function_?: dedicated.housing.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
  /**
   * Housing tasks
   * Get this object properties
   */
  public get(path: '/dedicated/housing/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<dedicated.housing.Task>;
  public get(path: PathsDedicatedHousingGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Alter this object properties
   */
  public put(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', params: {ipBlock: string, serviceName: string, cifs?: boolean, ftp?: boolean, isApplied?: boolean, lastUpdate?: string, nfs?: boolean}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/dedicated/housing/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsDedicatedHousingPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Backup Ftp assigned to this server
   * Create a new Backup FTP space
   */
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP', params: {serviceName: string}): Promise<dedicated.server.Task>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * Create a new Backup FTP ACL
   */
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP/access', params: {serviceName: string, cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean}): Promise<dedicated.server.Task>;
  /**
   * password operations
   * Change your Backup FTP password
   */
  public post(path: '/dedicated/housing/{serviceName}/features/backupFTP/password', params: {serviceName: string}): Promise<dedicated.server.Task>;
  /**
   * cancel operations
   * this action stop the task progression if it's possible
   */
  public post(path: '/dedicated/housing/{serviceName}/task/{taskId}/cancel', params: {serviceName: string, taskId: number}): Promise<void>;
  public post(path: PathsDedicatedHousingPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Backup Ftp assigned to this server
   * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
   */
  public delete(path: '/dedicated/housing/{serviceName}/features/backupFTP', params: {serviceName: string}): Promise<dedicated.server.Task>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Revoke this ACL
   */
  public delete(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}', params: {ipBlock: string, serviceName: string}): Promise<dedicated.server.Task>;
  public delete(path: PathsDedicatedHousingDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}

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
    //license.DomainNumberEnum
    export type DomainNumberEnum = "0" | "1" | "10" | "100" | "30" | "300" | "unlimited"
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.Option
    // fullName: license.Option.Option
    export interface Option {
        amount?: string;
        canBeDeleted?: boolean;
        expirationDate?: string;
        label?: OVH.license.OptionLabel;
        version?: string;
    }
    //license.OptionLabel
    export type OptionLabel = "ANTISPAM_SPAMASSASSIN" | "ANTIVIRUS_DRWEB" | "ANTIVIRUS_KASPERSKY" | "DOMAINS" | "LANGUAGE_PACK" | "POWERPACK" | "SQL_SERVER" | "VIRTUOZZO_CONTAINERS"
    //license.OrderableAntivirusEnum
    export type OrderableAntivirusEnum = "DR_WEB" | "KASPERSKY_UNLIMITED_MAILBOXES" | "kaspersky"
    //license.OrderablePleskCompatibilityInfos
    // fullName: license.OrderablePleskCompatibilityInfos.OrderablePleskCompatibilityInfos
    export interface OrderablePleskCompatibilityInfos {
        canHavePowerPack?: boolean;
        canHaveResellerManagement?: boolean;
        canHaveWordpressToolkit?: boolean;
        compliantAntivirus?: OVH.license.OrderableAntivirusEnum[];
        compliantApplicationSets?: OVH.license.PleskApplicationSetEnum[];
        compliantDomains?: OVH.license.OrderablePleskDomainNumberEnum[];
        compliantLanguagePack?: OVH.license.OrderablePleskLanguagePackEnum[];
        potentialProblems?: OVH.license.PotentialProblemPleskEnum[];
        version?: OVH.license.PleskVersionEnum;
    }
    //license.OrderablePleskDomainNumberEnum
    export type OrderablePleskDomainNumberEnum = "10" | "100" | "30" | "300" | "hostingsuite" | "unlimited"
    //license.OrderablePleskLanguagePackEnum
    export type OrderablePleskLanguagePackEnum = "1" | "1-extra-language-for-plesk12" | "2" | "2-extra-languages-for-plesk12" | "3" | "3-extra-languages-for-plesk12" | "4" | "4-extra-languages-for-plesk12" | "5" | "5-extra-languages-for-plesk12" | "unlimited" | "unlimited-extra-languages-for-plesk12"
    //license.PleskApplicationSetEnum
    export type PleskApplicationSetEnum = "applicationpack" | "developerpack" | "power-pack-for-plesk12" | "powerpack"
    //license.PleskOrderConfiguration
    // fullName: license.PleskOrderConfiguration.PleskOrderConfiguration
    export interface PleskOrderConfiguration {
        orderableVersions?: OVH.license.OrderablePleskCompatibilityInfos[];
        serviceType?: OVH.license.LicenseTypeEnum;
    }
    //license.PleskVersionEnum
    export type PleskVersionEnum = "PLESK_10_AND_LATER" | "PLESK_10_AND_LATER_FOR_KVM" | "PLESK_10_AND_LATER_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE" | "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ" | "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN" | "PLESK_10_AND_LATER_FOR_XEN" | "PLESK_12_VPS_WEB_ADMIN" | "PLESK_12_VPS_WEB_APP" | "PLESK_12_VPS_WEB_HOST" | "PLESK_12_VPS_WEB_HOST_CLNX" | "PLESK_12_VPS_WEB_PRO" | "PLESK_12_VPS_WEB_PRO_CLNX" | "PLESK_12_WEB_ADMIN" | "PLESK_12_WEB_APP" | "PLESK_12_WEB_HOST" | "PLESK_12_WEB_HOST_CLNX" | "PLESK_12_WEB_PRO" | "PLESK_12_WEB_PRO_CLNX" | "PLESK_75_RELOADED" | "PLESK_80" | "PLESK_80_FOR_VZ" | "PLESK_81_FOR_WIN" | "PLESK_9" | "PLESK_95" | "PLESK_95_FOR_VZ" | "PLESK_95_FOR_WIN" | "PLESK_9_FOR_VZ" | "PLESK_9_FOR_WIN" | "PLESK_ONYX_VPS_WEB_ADMIN" | "PLESK_ONYX_VPS_WEB_APP" | "PLESK_ONYX_VPS_WEB_HOST" | "PLESK_ONYX_VPS_WEB_HOST_CLNX" | "PLESK_ONYX_VPS_WEB_PRO" | "PLESK_ONYX_VPS_WEB_PRO_CLNX" | "PLESK_ONYX_WEB_ADMIN" | "PLESK_ONYX_WEB_APP" | "PLESK_ONYX_WEB_HOST" | "PLESK_ONYX_WEB_HOST_CLNX" | "PLESK_ONYX_WEB_PRO" | "PLESK_ONYX_WEB_PRO_CLNX" | "plesk-12-webadmin-for-vps" | "plesk-12-webhost" | "plesk-12-webhost-for-vps" | "plesk-12-webpro" | "plesk-12-webpro-for-vps"
    //license.PotentialProblemPleskEnum
    export type PotentialProblemPleskEnum = "isHostOsHyperVLike" | "isHostOsVMwareLike" | "isHostOsVirtuozzo4Like" | "isHostOsXenLike" | "isLinuxOs" | "isOsCloudLinux" | "isOsPlesk10andLater" | "isOsPlesk12" | "isOsPleskOnyx" | "isWindowsOs"
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
    export namespace plesk {
        //license.plesk.Plesk
        // fullName: license.plesk.Plesk.Plesk
        export interface Plesk {
            creation?: string;
            deleteAtExpiration?: boolean;
            domain?: string;
            domainNumber?: OVH.license.DomainNumberEnum;
            informationKey?: string;
            ip?: string;
            key?: string;
            licenseId?: string;
            productKey?: string;
            status?: OVH.license.StateEnum;
            version?: OVH.license.PleskVersionEnum;
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
    plesk:  {
        // GET /license/plesk
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /license/plesk/{serviceName}
            GET(): Promise<license.plesk.Plesk>;
            // PUT /license/plesk/{serviceName}
            PUT(body?: {body: license.plesk.Plesk}): Promise<void>;
            changeIp:  {
                // POST /license/plesk/{serviceName}/changeIp
                POST(body?: {destinationIp: string}): Promise<license.Task>;
            }
            option:  {
                // GET /license/plesk/{serviceName}/option
                GET(): Promise<license.OptionLabel[]>;
                [keys: string]: {
                    // GET /license/plesk/{serviceName}/option/{label}
                    GET(): Promise<license.Option>;
                    // DELETE /license/plesk/{serviceName}/option/{label}
                    DELETE(): Promise<license.Task>;
                } | any
            }
            terminate:  {
                // POST /license/plesk/{serviceName}/terminate
                POST(): Promise<string>;
            }
            serviceInfos:  {
                // GET /license/plesk/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /license/plesk/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            tasks:  {
                // GET /license/plesk/{serviceName}/tasks
                GET(param?: {status?: license.TaskStateEnum, action?: license.ActionType}): Promise<number[]>;
                [keys: string]: {
                    // GET /license/plesk/{serviceName}/tasks/{taskId}
                    GET(): Promise<license.Task>;
                } | any
            }
            canLicenseBeMovedTo:  {
                // GET /license/plesk/{serviceName}/canLicenseBeMovedTo
                GET(param?: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            allowedDestinationIp:  {
                // GET /license/plesk/{serviceName}/allowedDestinationIp
                GET(): Promise<string[]>;
            }
            confirmTermination:  {
                // POST /license/plesk/{serviceName}/confirmTermination
                POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
            }
        } | any
        orderableVersions:  {
            // GET /license/plesk/orderableVersions
            GET(param?: {ip: string}): Promise<license.PleskOrderConfiguration[]>;
        }
    }
}
// Api
type PathsLicensePleskGET = '/license/plesk/{serviceName}' |
  '/license/plesk/{serviceName}/option' |
  '/license/plesk/{serviceName}/option/{label}' |
  '/license/plesk/{serviceName}/serviceInfos' |
  '/license/plesk/{serviceName}/tasks' |
  '/license/plesk/{serviceName}/tasks/{taskId}' |
  '/license/plesk/{serviceName}/canLicenseBeMovedTo' |
  '/license/plesk/{serviceName}/allowedDestinationIp' |
  '/license/plesk' |
  '/license/plesk/orderableVersions';

type PathsLicensePleskPUT = '/license/plesk/{serviceName}' |
  '/license/plesk/{serviceName}/serviceInfos';

type PathsLicensePleskPOST = '/license/plesk/{serviceName}/changeIp' |
  '/license/plesk/{serviceName}/terminate' |
  '/license/plesk/{serviceName}/confirmTermination';

type PathsLicensePleskDELETE = '/license/plesk/{serviceName}/option/{label}';

export class ApiLicensePlesk extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/license/plesk'): Promise<string[]>;
  /**
   * Your Plesk license
   * Get this object properties
   */
  public get(path: '/license/plesk/{serviceName}', params: {serviceName: string}): Promise<license.plesk.Plesk>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  public get(path: '/license/plesk/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  public get(path: '/license/plesk/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<license.ChangeIpStatus>;
  /**
   * List the license.Option objects
   * options attached to this license
   */
  public get(path: '/license/plesk/{serviceName}/option', params: {serviceName: string}): Promise<license.OptionLabel[]>;
  /**
   * Your License options
   * Get this object properties
   */
  public get(path: '/license/plesk/{serviceName}/option/{label}', params: {serviceName: string, label: string}): Promise<license.Option>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/license/plesk/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the license.Task objects
   * tasks linked to this license
   */
  public get(path: '/license/plesk/{serviceName}/tasks', params: {serviceName: string, action?: OVH.license.ActionType, status?: OVH.license.TaskStateEnum}): Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  public get(path: '/license/plesk/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: string}): Promise<license.Task>;
  /**
   * Get the orderable Plesk versions and their associated compatibilities
   * Get the orderable Plesk versions and their associated compatibilities
   */
  public get(path: '/license/plesk/orderableVersions', params: {ip: string}): Promise<license.PleskOrderConfiguration[]>;
  public get(path: PathsLicensePleskGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your Plesk license
   * Alter this object properties
   */
  public put(path: '/license/plesk/{serviceName}', params: {serviceName: string, creation?: string, deleteAtExpiration?: boolean, domain?: string, domainNumber?: OVH.license.DomainNumberEnum, informationKey?: string, ip?: string, key?: string, licenseId?: string, productKey?: string, status?: OVH.license.StateEnum, version?: OVH.license.PleskVersionEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/license/plesk/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsLicensePleskPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  public post(path: '/license/plesk/{serviceName}/changeIp', params: {serviceName: string, destinationIp: string}): Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/license/plesk/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/license/plesk/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicensePleskPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Your License options
   * release this Option
   */
  public delete(path: '/license/plesk/{serviceName}/option/{label}', params: {serviceName: string, label: string}): Promise<license.Task>;
  public delete(path: PathsLicensePleskDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}
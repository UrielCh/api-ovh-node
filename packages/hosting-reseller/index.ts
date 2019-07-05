import { OvhWrapper, OvhRequestable, OvhParamType, buildOvhProxy } from '@ovh-api/common';

export namespace hosting {
    export namespace reseller {
        //hosting.reseller.metaType
        // fullName: hosting.reseller.metaType.metaType
        export interface metaType {
            email: string;
            region: string;
        }
        //hosting.reseller.product
        // fullName: hosting.reseller.product.product
        export interface product {
            action?: string;
            ip?: string;
            meta: hosting.reseller.metaType;
            progress?: number;
            status: string;
            type: hosting.reseller.resellerTypeEnum;
            typeDetail: hosting.reseller.productType;
            url?: string;
        }
        //hosting.reseller.productType
        // fullName: hosting.reseller.productType.productType
        export interface productType {
            consumers: number;
            cpu: string;
            databases: number;
            diskSize: number;
            emailAccounts: number;
            ram: number;
            type: string;
            vCores: number;
            websites: number;
        }
        //hosting.reseller.resellerTypeEnum
        export type resellerTypeEnum = "TYPE1" | "TYPE2" | "TYPE3" | "TYPE4" | "TYPE5"
    }
}
export namespace reseller {
    //reseller.pleskLanguageTypeEnum
    export type pleskLanguageTypeEnum = "ar" | "zh-CN" | "zh-TW" | "cs-CZ" | "da-DK" | "nl-NL" | "en-US" | "fi-FI" | "fr-FR" | "de-DE" | "el-GR" | "he-IL" | "hu-HU" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "ms-MY" | "nb-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "sv-SE" | "tl-PH" | "th-TH" | "tr-TR" | "uk-UA" | "vi-VN"
    //reseller.snapshot
    // fullName: reseller.snapshot.snapshot
    export interface snapshot {
        creationDate: string;
        id: string;
        snashotName: string;
        type: reseller.snapshotTypeEnum;
    }
    //reseller.snapshotTypeEnum
    export type snapshotTypeEnum = "automatic" | "manual"
    //reseller.task
    // fullName: reseller.task.task
    export interface task {
        currentStep: string;
        expectedDoneDate?: string;
        id: string;
        lastUpdateDate?: string;
        productDomain: string;
        progress: number;
        taskName: string;
        taskStatus: reseller.taskTypeEnum;
    }
    //reseller.taskTypeEnum
    export type taskTypeEnum = "done" | "error" | "doing" | "todo" | "unknown"
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
export function proxyHostingReseller(ovhEngine: OvhRequestable): Hosting {
    return buildOvhProxy(ovhEngine, '/hosting/reseller');
}
// Apis harmony
// path /hosting
export interface Hosting{
    reseller: {
        // GET /hosting/reseller
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /hosting/reseller/{serviceName}
            $get(): Promise<hosting.reseller.product>;
            changeContact: {
                // POST /hosting/reseller/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            email: {
                // POST /hosting/reseller/{serviceName}/email
                $post(body?: {email: string}): Promise<string>;
            }
            language: {
                // POST /hosting/reseller/{serviceName}/language
                $post(body?: {language: reseller.pleskLanguageTypeEnum}): Promise<string>;
            }
            reboot: {
                // POST /hosting/reseller/{serviceName}/reboot
                $post(): Promise<string>;
            }
            reinstall: {
                // POST /hosting/reseller/{serviceName}/reinstall
                $post(): Promise<string>;
            }
            resetPasswordUrl: {
                // GET /hosting/reseller/{serviceName}/resetPasswordUrl
                $get(): Promise<string>;
            }
            reverse: {
                // POST /hosting/reseller/{serviceName}/reverse
                $post(body?: {reverse: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /hosting/reseller/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /hosting/reseller/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            snapshot: {
                // GET /hosting/reseller/{serviceName}/snapshot
                $get(): Promise<reseller.snapshot[]>;
                // POST /hosting/reseller/{serviceName}/snapshot
                $post(): Promise<string>;
                $(snapshotId: string): {
                    // GET /hosting/reseller/{serviceName}/snapshot/{snapshotId}
                    $get(): Promise<reseller.snapshot>;
                    restore: {
                        // POST /hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore
                        $post(): Promise<string>;
                    }
                };
            }
            task: {
                // GET /hosting/reseller/{serviceName}/task
                $get(): Promise<reseller.task[]>;
                $(taskId: string): {
                    // GET /hosting/reseller/{serviceName}/task/{taskId}
                    $get(): Promise<reseller.task>;
                };
            }
        };
    }
}
// Api
type PathsHostingResellerGET = '/hosting/reseller' |
  '/hosting/reseller/{serviceName}' |
  '/hosting/reseller/{serviceName}/resetPasswordUrl' |
  '/hosting/reseller/{serviceName}/serviceInfos' |
  '/hosting/reseller/{serviceName}/snapshot' |
  '/hosting/reseller/{serviceName}/snapshot/{snapshotId}' |
  '/hosting/reseller/{serviceName}/task' |
  '/hosting/reseller/{serviceName}/task/{taskId}';

type PathsHostingResellerPUT = '/hosting/reseller/{serviceName}/serviceInfos';

type PathsHostingResellerPOST = '/hosting/reseller/{serviceName}/changeContact' |
  '/hosting/reseller/{serviceName}/email' |
  '/hosting/reseller/{serviceName}/language' |
  '/hosting/reseller/{serviceName}/reboot' |
  '/hosting/reseller/{serviceName}/reinstall' |
  '/hosting/reseller/{serviceName}/reverse' |
  '/hosting/reseller/{serviceName}/snapshot' |
  '/hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore';

export class ApiHostingReseller extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the HOSTING_RESELLER service
   * List available services
   */
  public get(path: '/hosting/reseller'): Promise<string[]>;
  /**
   * Reseller
   * Get this object properties
   */
  public get(path: '/hosting/reseller/{serviceName}', params: {serviceName: string}): Promise<hosting.reseller.product>;
  /**
   * Reseller.resetPassword
   * Get reset instance password url
   */
  public get(path: '/hosting/reseller/{serviceName}/resetPasswordUrl', params: {serviceName: string}): Promise<string>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/hosting/reseller/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Reseller.list_snapshot
   * List instance's current snapshots
   */
  public get(path: '/hosting/reseller/{serviceName}/snapshot', params: {serviceName: string}): Promise<reseller.snapshot[]>;
  /**
   * Reseller.get_snapshot
   * Detail of a snapshot
   */
  public get(path: '/hosting/reseller/{serviceName}/snapshot/{snapshotId}', params: {serviceName: string, snapshotId: string}): Promise<reseller.snapshot>;
  /**
   * Reseller.list_task
   * Get list of tasks
   */
  public get(path: '/hosting/reseller/{serviceName}/task', params: {serviceName: string}): Promise<reseller.task[]>;
  /**
   * Reseller.get_task
   * Get task information given its id
   */
  public get(path: '/hosting/reseller/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<reseller.task>;
  public get(path: PathsHostingResellerGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/hosting/reseller/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsHostingResellerPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/hosting/reseller/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Reseller.change_email
   * Change user email
   */
  public post(path: '/hosting/reseller/{serviceName}/email', params: {serviceName: string, email: string}): Promise<string>;
  /**
   * Reseller.change_language
   * Change language of the Plesk instance
   */
  public post(path: '/hosting/reseller/{serviceName}/language', params: {serviceName: string, language: reseller.pleskLanguageTypeEnum}): Promise<string>;
  /**
   * Reseller.reboot
   * Restart instance
   */
  public post(path: '/hosting/reseller/{serviceName}/reboot', params: {serviceName: string}): Promise<string>;
  /**
   * Reseller.reinstall
   * Reinstall instance
   */
  public post(path: '/hosting/reseller/{serviceName}/reinstall', params: {serviceName: string}): Promise<string>;
  /**
   * Reseller.set_reverse
   * Set new reverse to ip
   */
  public post(path: '/hosting/reseller/{serviceName}/reverse', params: {serviceName: string, reverse: string}): Promise<string>;
  /**
   * Reseller.list_snapshot
   * Make manual snapshot
   */
  public post(path: '/hosting/reseller/{serviceName}/snapshot', params: {serviceName: string}): Promise<string>;
  /**
   * Reseller.restore_snapshot
   * Restore a snapshot
   */
  public post(path: '/hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore', params: {serviceName: string, snapshotId: string}): Promise<string>;
  public post(path: PathsHostingResellerPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
export default ApiHostingReseller;

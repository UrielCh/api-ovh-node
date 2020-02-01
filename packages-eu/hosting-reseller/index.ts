import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /hosting/reseller Models
 * Source: https://eu.api.ovh.com/1.0/hosting/reseller.json
 */
export namespace hosting {
    export namespace reseller {
        // interface fullName: hosting.reseller.metaType.metaType
        export interface metaType {
            email: string;
            region: string;
        }
        // interface fullName: hosting.reseller.product.product
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
        // interface fullName: hosting.reseller.productType.productType
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
        // type fullname: hosting.reseller.resellerTypeEnum
        export type resellerTypeEnum = "TYPE1" | "TYPE2" | "TYPE3" | "TYPE4" | "TYPE5"
    }
}
export namespace reseller {
    // type fullname: reseller.pleskLanguageTypeEnum
    export type pleskLanguageTypeEnum = "ar" | "zh-CN" | "zh-TW" | "cs-CZ" | "da-DK" | "nl-NL" | "en-US" | "fi-FI" | "fr-FR" | "de-DE" | "el-GR" | "he-IL" | "hu-HU" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "ms-MY" | "nb-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "sv-SE" | "tl-PH" | "th-TH" | "tr-TR" | "uk-UA" | "vi-VN"
    // interface fullName: reseller.snapshot.snapshot
    export interface snapshot {
        creationDate: string;
        id: string;
        snashotName: string;
        type: reseller.snapshotTypeEnum;
    }
    // type fullname: reseller.snapshotTypeEnum
    export type snapshotTypeEnum = "automatic" | "manual"
    // interface fullName: reseller.task.task
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
    // type fullname: reseller.taskTypeEnum
    export type taskTypeEnum = "done" | "error" | "doing" | "todo" | "unknown"
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
 * END API /hosting/reseller Models
 */
export function proxyHostingReseller(ovhEngine: OvhRequestable): Hosting {
    return buildOvhProxy(ovhEngine, '/hosting');
}
export default proxyHostingReseller;
/**
 * Api Proxy model
 */// Apis harmony
// path /hosting
export interface Hosting {
    reseller: {
        // GET /hosting/reseller
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /hosting/reseller/{serviceName}
            $get(): Promise<hosting.reseller.product>;
            changeContact: {
                // POST /hosting/reseller/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            email: {
                // POST /hosting/reseller/{serviceName}/email
                $post(params: {email: string}): Promise<string>;
            }
            language: {
                // POST /hosting/reseller/{serviceName}/language
                $post(params: {language: reseller.pleskLanguageTypeEnum}): Promise<string>;
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
                $post(params: {reverse: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /hosting/reseller/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /hosting/reseller/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
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

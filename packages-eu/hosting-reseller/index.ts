import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /hosting/reseller Models
 * Source: https://eu.api.ovh.com/1.0/hosting/reseller.json
 */
export namespace hosting {
    export namespace reseller {
        /**
         * Plesk to Public Cloud migration status type
         * type fullname: hosting.reseller.metaMigrationStatusTypeEnum
         */
        export type metaMigrationStatusTypeEnum = "done" | "pending" | "planned"
        /**
         * Plesk instance migration meta details
         * interface fullName: hosting.reseller.metaMigrationType.metaMigrationType
         */
        export interface metaMigrationType {
            contractApproved: boolean;
            dateOfApproval?: string;
            pcProject?: string;
            status: hosting.reseller.metaMigrationStatusTypeEnum;
        }
        /**
         * Plesk instance meta details
         * interface fullName: hosting.reseller.metaType.metaType
         */
        export interface metaType {
            email: string;
            migration?: hosting.reseller.metaMigrationType;
            region: string;
        }
        /**
         * Reseller
         * interface fullName: hosting.reseller.product.product
         */
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
        /**
         * Plesk instance type details
         * interface fullName: hosting.reseller.productType.productType
         */
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
        /**
         * Reseller type
         * type fullname: hosting.reseller.resellerTypeEnum
         */
        export type resellerTypeEnum = "TYPE1" | "TYPE2" | "TYPE3" | "TYPE4" | "TYPE5"
    }
}
export namespace reseller {
    /**
     * Possible values for language type
     * type fullname: reseller.pleskLanguageTypeEnum
     */
    export type pleskLanguageTypeEnum = "ar" | "zh-CN" | "zh-TW" | "cs-CZ" | "da-DK" | "nl-NL" | "en-US" | "fi-FI" | "fr-FR" | "de-DE" | "el-GR" | "he-IL" | "hu-HU" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "ms-MY" | "nb-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "sv-SE" | "tl-PH" | "th-TH" | "tr-TR" | "uk-UA" | "vi-VN"
    /**
     * Reseller snapshot
     * interface fullName: reseller.snapshot.snapshot
     */
    export interface snapshot {
        creationDate: string;
        id: string;
        snashotName: string;
        type: reseller.snapshotTypeEnum;
    }
    /**
     * Possible values for snapshot type
     * type fullname: reseller.snapshotTypeEnum
     */
    export type snapshotTypeEnum = "automatic" | "manual"
    /**
     * Reseller task
     * interface fullName: reseller.task.task
     */
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
    /**
     * Possible values for task status
     * type fullname: reseller.taskTypeEnum
     */
    export type taskTypeEnum = "done" | "error" | "doing" | "todo" | "unknown"
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
 * Api model for /hosting/reseller
 */
export interface Hosting {
    reseller: {
        /**
         * List available services
         * GET /hosting/reseller
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /hosting/reseller/{serviceName}
             */
            $get(): Promise<hosting.reseller.product>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /hosting/reseller/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            email: {
                /**
                 * Change user email
                 * POST /hosting/reseller/{serviceName}/email
                 */
                $post(params: { email: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            language: {
                /**
                 * Change language of the Plesk instance
                 * POST /hosting/reseller/{serviceName}/language
                 */
                $post(params: { language: reseller.pleskLanguageTypeEnum }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            migration: {
                /**
                 * Register a migration request
                 * POST /hosting/reseller/{serviceName}/migration
                 */
                $post(params: { pcProject: string, readAndAgreedContract: boolean }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            reboot: {
                /**
                 * Restart instance
                 * POST /hosting/reseller/{serviceName}/reboot
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            reinstall: {
                /**
                 * Reinstall instance
                 * POST /hosting/reseller/{serviceName}/reinstall
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            resetPasswordUrl: {
                /**
                 * Get reset instance password url
                 * GET /hosting/reseller/{serviceName}/resetPasswordUrl
                 */
                $get(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            reverse: {
                /**
                 * Set new reverse to ip
                 * POST /hosting/reseller/{serviceName}/reverse
                 */
                $post(params: { reverse: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /hosting/reseller/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /hosting/reseller/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            snapshot: {
                /**
                 * List instance's current snapshots
                 * GET /hosting/reseller/{serviceName}/snapshot
                 */
                $get(): Promise<reseller.snapshot[]>;
                /**
                 * Make manual snapshot
                 * POST /hosting/reseller/{serviceName}/snapshot
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(snapshotId: string): {
                    /**
                     * Detail of a snapshot
                     * GET /hosting/reseller/{serviceName}/snapshot/{snapshotId}
                     */
                    $get(): Promise<reseller.snapshot>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    restore: {
                        /**
                         * Restore a snapshot
                         * POST /hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore
                         */
                        $post(): Promise<string>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            task: {
                /**
                 * Get list of tasks
                 * GET /hosting/reseller/{serviceName}/task
                 */
                $get(): Promise<reseller.task[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: string): {
                    /**
                     * Get task information given its id
                     * GET /hosting/reseller/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<reseller.task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
}

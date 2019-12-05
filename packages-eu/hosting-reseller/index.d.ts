import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /hosting/reseller Models
 */
export declare namespace hosting {
    namespace reseller {
        interface metaType {
            email: string;
            region: string;
        }
        interface product {
            action?: string;
            ip?: string;
            meta: hosting.reseller.metaType;
            progress?: number;
            status: string;
            type: hosting.reseller.resellerTypeEnum;
            typeDetail: hosting.reseller.productType;
            url?: string;
        }
        interface productType {
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
        type resellerTypeEnum = "TYPE1" | "TYPE2" | "TYPE3" | "TYPE4" | "TYPE5";
    }
}
export declare namespace reseller {
    type pleskLanguageTypeEnum = "ar" | "zh-CN" | "zh-TW" | "cs-CZ" | "da-DK" | "nl-NL" | "en-US" | "fi-FI" | "fr-FR" | "de-DE" | "el-GR" | "he-IL" | "hu-HU" | "id-ID" | "it-IT" | "ja-JP" | "ko-KR" | "ms-MY" | "nb-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "sv-SE" | "tl-PH" | "th-TH" | "tr-TR" | "uk-UA" | "vi-VN";
    interface snapshot {
        creationDate: string;
        id: string;
        snashotName: string;
        type: reseller.snapshotTypeEnum;
    }
    type snapshotTypeEnum = "automatic" | "manual";
    interface task {
        currentStep: string;
        expectedDoneDate?: string;
        id: string;
        lastUpdateDate?: string;
        productDomain: string;
        progress: number;
        taskName: string;
        taskStatus: reseller.taskTypeEnum;
    }
    type taskTypeEnum = "done" | "error" | "doing" | "todo" | "unknown";
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface Service {
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
export declare function proxyHostingReseller(ovhEngine: OvhRequestable): Hosting;
export default proxyHostingReseller;
/**
 * Api Proxy model
 */ export interface Hosting {
    reseller: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<hosting.reseller.product>;
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            email: {
                $post(params: {
                    email: string;
                }): Promise<string>;
            };
            language: {
                $post(params: {
                    language: reseller.pleskLanguageTypeEnum;
                }): Promise<string>;
            };
            reboot: {
                $post(): Promise<string>;
            };
            reinstall: {
                $post(): Promise<string>;
            };
            resetPasswordUrl: {
                $get(): Promise<string>;
            };
            reverse: {
                $post(params: {
                    reverse: string;
                }): Promise<string>;
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            snapshot: {
                $get(): Promise<reseller.snapshot[]>;
                $post(): Promise<string>;
                $(snapshotId: string): {
                    $get(): Promise<reseller.snapshot>;
                    restore: {
                        $post(): Promise<string>;
                    };
                };
            };
            task: {
                $get(): Promise<reseller.task[]>;
                $(taskId: string): {
                    $get(): Promise<reseller.task>;
                };
            };
        };
    };
    /**
     * Operations about the HOSTING_RESELLER service
     * List available services
     */
    get(path: '/hosting/reseller'): () => Promise<string[]>;
    /**
     * Reseller
     * Get this object properties
     */
    get(path: '/hosting/reseller/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<hosting.reseller.product>;
    /**
     * Reseller.resetPassword
     * Get reset instance password url
     */
    get(path: '/hosting/reseller/{serviceName}/resetPasswordUrl'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/hosting/reseller/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Reseller.list_snapshot
     * List instance's current snapshots
     */
    get(path: '/hosting/reseller/{serviceName}/snapshot'): (params: {
        serviceName: string;
    }) => Promise<reseller.snapshot[]>;
    /**
     * Reseller.get_snapshot
     * Detail of a snapshot
     */
    get(path: '/hosting/reseller/{serviceName}/snapshot/{snapshotId}'): (params: {
        serviceName: string;
        snapshotId: string;
    }) => Promise<reseller.snapshot>;
    /**
     * Reseller.list_task
     * Get list of tasks
     */
    get(path: '/hosting/reseller/{serviceName}/task'): (params: {
        serviceName: string;
    }) => Promise<reseller.task[]>;
    /**
     * Reseller.get_task
     * Get task information given its id
     */
    get(path: '/hosting/reseller/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: string;
    }) => Promise<reseller.task>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/hosting/reseller/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/hosting/reseller/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Reseller.change_email
     * Change user email
     */
    post(path: '/hosting/reseller/{serviceName}/email'): (params: {
        serviceName: string;
        email: string;
    }) => Promise<string>;
    /**
     * Reseller.change_language
     * Change language of the Plesk instance
     */
    post(path: '/hosting/reseller/{serviceName}/language'): (params: {
        serviceName: string;
        language: reseller.pleskLanguageTypeEnum;
    }) => Promise<string>;
    /**
     * Reseller.reboot
     * Restart instance
     */
    post(path: '/hosting/reseller/{serviceName}/reboot'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Reseller.reinstall
     * Reinstall instance
     */
    post(path: '/hosting/reseller/{serviceName}/reinstall'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Reseller.set_reverse
     * Set new reverse to ip
     */
    post(path: '/hosting/reseller/{serviceName}/reverse'): (params: {
        serviceName: string;
        reverse: string;
    }) => Promise<string>;
    /**
     * Reseller.list_snapshot
     * Make manual snapshot
     */
    post(path: '/hosting/reseller/{serviceName}/snapshot'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * Reseller.restore_snapshot
     * Restore a snapshot
     */
    post(path: '/hosting/reseller/{serviceName}/snapshot/{snapshotId}/restore'): (params: {
        serviceName: string;
        snapshotId: string;
    }) => Promise<string>;
}
